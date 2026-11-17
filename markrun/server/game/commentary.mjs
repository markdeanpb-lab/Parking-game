// Two original commentators. Jeff Bellows: overexcited veteran of a thousand village fun runs.
// Pam Pettigrew: dry, deadpan, quietly devastating. Lines are short (TTS) and never repeat within a session.
import { fill, countWords } from './text.mjs';
import { pickLineId, releaseLine } from './memory.mjs';
import { rankAt, broadcastToRace, distanceAt } from './raceplan.mjs';
import { spokenOdds } from './model.mjs';

export const COMMENTATORS = {
  jeff: { id: 'jeff', name: 'Jeff Bellows', role: 'Overexcited veteran. Has commentated 900 egg-and-spoon races and treats each like an Olympic final.' },
  pam: { id: 'pam', name: 'Pam Pettigrew', role: 'Deadpan co-commentator. Former parkrun Run Director. Has seen it all and was unimpressed by most of it.' },
};

// Bank entries: "first speaker line || reply line" (speakers alternate, starting with the bank's lead speaker).
const B = {
  // ---------- pre-race ----------
  intro_jeff: [
    'Welcome to the greatest show on two laps: {title}!',
    'Morning, all! It\'s {title}, and the park is buzzing!',
    'Good morning and welcome to Finsbury Park for {title}!',
    'Welcome, welcome, welcome! It\'s {title}, and I have had four coffees!',
    'Hello and welcome to {title}! What a morning for it!',
    'It\'s {title}! The sun is up, the cones are out, and I am beside myself!',
    'Welcome to North London\'s premier two-lap spectacle: {title}!',
    'Ladies and gentlemen, sofa-dwellers of the world, this is {title}!',
    'Good morning from the Finsbury Park gantry! It\'s {title}!',
    'Welcome back! We are live for {title}, and the tension is unbearable!',
    'Big morning here. Massive morning. It\'s {title}!',
    'Greetings from the start line, where it\'s {title} and anything can happen!',
    'We\'re live in North London, and it is {title}!',
    'Hold on to your flat whites, it\'s {title}!',
  ],
  intro_pam: [
    'Two laps. Plenty of time for disappointment.',
    'The weather is weather. Let\'s begin.',
    'It\'s a parkrun, Jeff. It happens every Saturday.',
    'I\'m told there\'s a café afterwards. That\'s my main interest.',
    'Five runners. Two laps. One Hill. Let\'s not get carried away.',
    'Someone has already lost a glove. Classic Finsbury.',
    'The ducks look more prepared than some of these runners.',
    'I\'ve brought a flask. It\'s going to be a long morning.',
    'Jeff has been here since six. Nobody asked him to be.',
    'Remember, it\'s not a race. Except it is. Except it isn\'t.',
    'I\'d like to thank the volunteers. Somebody has to.',
    'The Hill is waiting. The Hill is always waiting.',
    'I\'ve done my research. It didn\'t help.',
    'Thrilling. Truly. Let\'s get on with it.',
  ],
  wildcard_intro: [
    'Word from the paddock: one of these five was NOT trying very hard that day. Read your clues carefully!',
    'Wildcard round! One runner turned up for a gentle jog. Which one? That\'s your job.',
    'Special warning from the stewards: there is a passenger in this field. Spot the dawdler.',
  ],
  // ---------- betting reactions ----------
  bet_big: [
    '{name} has lumped {stake} parkpounds on {a}! Absolute scenes! || That\'s brave. Or something.',
    '{stake} on {a} from {name}! The confidence! || The rent money, possibly.',
    'Whoa! {name} goes big. {stake} parkpounds on {a}! || I hope that\'s a considered decision. It isn\'t.',
    '{name} has bet the farm on {a}. {stake} parkpounds! || Somebody hide the farm.',
    'Huge money from {name}: {stake} on {a}! || Fortune favours the brave. Occasionally.',
  ],
  bet_longshot: [
    '{name} is backing {a} at {odds}! I love a dreamer! || I\'ve seen this before. It ends in tears.',
    'Look at that! {name} on {a}, the {odds} outsider! || Somebody\'s been reading the clues. Or the tea leaves.',
    '{name} fancies the longshot, {a} at {odds}! || Bold. Statistically questionable, but bold.',
    'The outsider! {name} has gone for {a}! || A romantic. Romance rarely pays out.',
    '{name} has spotted something in {a} the rest of us missed! || Possibly a mirage.',
  ],
  bet_fav: [
    '{name} is on the favourite, {a}! Sensible! || Sensible is just boring with a pension.',
    'Safety first from {name}, backing {a}! || Nobody ever told a story about backing the favourite.',
    '{name} goes with the market: {a} at {odds}! || The herd has spoken.',
    '{name} backs the jolly, {a}! || Every favourite loses eventually. Just saying.',
    'Chalk from {name}! {a} it is! || Riveting.',
  ],
  bet_same: [
    'Both of you are on {a}! A united household! || Until {a} loses. Then it\'s whose idea was this.',
    'Oh, lovely! The whole sofa is backing {a}! || Shared joy, or shared blame. We\'ll find out.',
    'Everybody\'s on {a}! What does that runner know? || What do YOU know, more to the point.',
  ],
  bet_split: [
    '{name} is spreading the money around like jam! || Hedging. The coward\'s champagne.',
    '{name} has backed three different runners! || If you back everyone, you\'re bound to be slightly right.',
    'Multiple bets from {name}! A portfolio! || A very small, very silly portfolio.',
  ],
  bet_none: [
    '{name} hasn\'t bet a single parkpound! || Wise. Cowardly, but wise.',
    'Nothing from {name}! Keeping the powder dry! || Or asleep.',
    '{name} is sitting this one out. || Nobody likes a spectator, {name}.',
  ],
  bet_h2h: [
    '{name} has a head-to-head on {a} beating {b}! || A grudge match within a grudge match.',
    'Side bet from {name}: {a} to beat {b}! || Petty. I respect it.',
    '{name} reckons {a} has the beating of {b}! || We\'ll see about that.',
  ],
  bet_closed: [
    'No more bets please! The cones are in place!',
    'Bets locked! There\'s no going back now!',
    'The book is shut, the trainers are laced!',
    'That\'s the betting done! Fingers crossed, everybody!',
    'Money down, hearts up! Let\'s race!',
    'And the betting window slams shut! Here we go!',
    'Betting is closed! No more bets! Ooh, I\'ve gone all tingly!',
    'That\'s it, the book is closed! Runners, take your marks!',
    'All bets are in! Let\'s go racing! Well, parkrunning!',
    'The windows are shut! The money is down! Let\'s get them under way!',
  ],
  // ---------- race ----------
  start: [
    'And we are underway! Elbows tucked, hopes high!',
    'They\'re racing! What a sight! What a noise!',
    'Off they go! Like a stampede of very polite wildebeest!',
    'And they\'re off! Five go into the Finsbury fog!',
    'Three, two, one, and away they go!',
    'And we\'re off! Elbows out, dignity left at the start line!',
    'They\'re away! A clean start, and only mild jostling!',
    'Go go go! We are racing at Finsbury Park!',
    'And off they trot! No, they run! They\'re definitely running!',
    'The briefing is over and they are away!',
    'And they\'re off! Listen to that! That\'s the sound of a hundred Garmins beeping!',
    'Off they go, past the tennis courts, hearts pounding!',
    'And it\'s go time! Lovely start, nobody fell over!',
    'They\'re off! Like greyhounds! Slightly rounder greyhounds!',
    'Away they go! Here we go! Here we go!',
  ],
  start_pam: [
    'Someone forgot to start their watch. They\'ll be furious.',
    'Nice and orderly. For now.',
    'Somebody\'s already started too fast. There\'s always one.',
    'I see the usual shuffling for position.',
    'A dog has joined the start. It is not a registered runner.',
    'Plenty of watches being fiddled with. None of them will help.',
    'They\'ll regret that pace by the Hill. They always do.',
    'Everyone looks very fresh. That won\'t last.',
    'A man in fancy dress is ahead of all of them. He\'s not in our race.',
    'Steady start. Very British.',
    'Lots of nervous energy. And elbows.',
    'One of them waved at the camera. Concentrate.',
  ],
  early_leader: [
    '{a} is out in front! Bold strategy!',
    '{a} has taken it on early!',
    'Up at the sharp end, {a}!',
    '{a} leads them round the first bend!',
    '{a} takes them through the early stages!',
    'It\'s {a} showing the way!',
    'Early doors, and {a} is in front!',
    '{a} has the lead! Will it last?',
    'Out in front early on, it\'s {a}!',
    '{a} is setting the pace here!',
    'At the head of affairs, {a}!',
    'First to show is {a}! Lovely stuff!',
  ],
  lead_change: [
    'And {to} takes the lead! {from} has been passed!',
    'New leader! It\'s {to}! {from} can only watch!',
    'Oh, here comes {to}! Into the lead!',
    '{to} hits the front! What a move!',
    'Change at the top! {to} leads now!',
    'And {to} goes past {from}! The lead is theirs!',
    '{to} grabs the lead! Cheeky! Very cheeky!',
    'There\'s a new name at the front, and it\'s {to}!',
    '{from} has lost the lead! {to} is in front!',
    'Well I never! {to} leads!',
    '{to} sweeps past {from}! We have a new leader!',
    'Swap at the front! {to} is in charge!',
    'Up goes {to}, into the lead!',
    'Here\'s {to}, flying! Up into first place!',
    '{to} has had enough of following! Into the lead!',
    'Look at {to} go! That\'s the lead!',
  ],
  lead_change_pam: [
    '{fromS} will not be happy about that.',
    'I did wonder when that would happen.',
    'Well. That escalated.',
    'Bold. Possibly premature.',
    'I\'ll believe it when I see the finish funnel.',
    'Interesting choice of moment.',
    'There goes the lead. Like a pigeon off a chip.',
    'That\'s parkrun. Nothing is ever settled.',
    'Oh, {fromS} looks cross.',
    'Someone has been saving their legs.',
  ],
  lead_change_late: [
    '{to} strikes late! {from} is reeling!',
    'What a finish this is! {to} hits the front!',
    'LATE drama! {to} takes the lead with the finish in sight!',
    'Oh my word! {to} goes past {from} in the closing stages!',
    'This is incredible! {to} leads, and there is hardly any race left!',
    'Unbelievable! {to} hits the front at the death!',
    'Here\'s the move! {to} has gone, and {from} has no answer!',
    'Ohhh! {to} in front! I need a sit down!',
    'Late lead change! {to}! {to}! {to}!',
    '{from} is caught! {to} is through! Scenes!',
    'Into the lead goes {to}! With the funnel beckoning!',
    'Never in doubt! Well, completely in doubt! {to} leads!',
  ],
  overtake: [
    '{by} picks off {on}!',
    '{by} slips past {on}!',
    'And {by} gets by {on}!',
    '{on} has been overtaken by {by}!',
    'Lovely move from {by}, past {on}!',
    '{by} moves up, {on} drops back!',
    'Ooh, {by} sneaks past {on} on the inside!',
    '{by} is on the march! Past {on}!',
    '{on} is going backwards! {by} is through!',
    'Through goes {by}! Sorry, {on}!',
    '{by} reels in {on}!',
    'And that\'s {on} passed by {by}!',
  ],
  breakaway: [
    '{who} has gone for broke! Off the front!',
    '{who} has kicked! Nobody goes with them!',
    '{who} opens up a gap! Brave or barmy?',
    '{who} has made a break! A big gap opening up!',
    'Look at that gap! {who} is getting away!',
    '{who} is off and gone! Can anybody follow?',
    '{who} has kicked clear! Where did that come from?',
    'Daylight! {who} has broken away!',
    '{who} is disappearing up the road! Somebody chase!',
    'A breakaway! {who} has dropped the lot of them!',
    '{who} is clear! The rest are looking at each other!',
  ],
  breakaway_pam: [
    'That looks premature to me.',
    'Either genius or a long lonely lesson.',
    'The others are letting him dangle.',
    'They\'ve let that go. Very generous of them.',
    'Nobody wants to do the work. Typical.',
    'That\'s a gap you could park a pram in.',
    'Bold. Let\'s see how bold on lap two.',
    'The chasers have gone very quiet.',
  ],
  hill1: [
    'The Hill! Lap one! Here we find out who skipped leg day!',
    'And now, the Hill! Every week it gets taller, I swear!',
    'Up they go! The Hill does not care about your training plan!',
    'First time up the Hill, and the arms are going like windmills!',
    'Hill time! Short steps, big hearts!',
    'The Hill, first visit! Somebody\'s regretting that second croissant!',
    'Here\'s the Hill for the first time! Legs, don\'t fail me now!',
    'Up the Hill they go! The great leveller!',
    'The Hill, lap one! This is where reputations go to die!',
    'Here comes the climb! Look at those faces!',
    'Up the Hill! It\'s steep! It\'s cruel! It\'s glorious!',
    'First ascent of the Hill! Arms pumping!',
  ],
  hill1_pam: [
    'Quiet on the Hill. Apart from the wheezing.',
    'This is where the chat stops.',
    'The Hill has claimed more ambitions than the Tube.',
    'Lean into it, lads.',
    'I walked this bit once. Nobody saw.',
    'It\'s not that steep, Jeff.',
    'Someone\'s walking. I won\'t say who.',
    'They\'ll be fine. Probably.',
    'You can hear the breathing from here.',
    'Smiles have left the building.',
  ],
  hill2: [
    'Second time up the Hill! It hasn\'t got any smaller!',
    'Last time up the Hill! Leave it all out there!',
    'The Hill again! This is the moment! Do it!',
    'Here\'s the final ascent! Faces like a slapped haddock!',
    'The Hill, lap two! The legs are screaming! I\'m screaming!',
    'Up the Hill one last time! This is where heroes are made!',
    'The Hill one more time! Last climb! Everything they\'ve got!',
    'Second time up the Hill! The pain! The glory!',
    'Here\'s the Hill again! This is where it\'s won and lost!',
    'One last go at the Hill! Dig in!',
    'Up the Hill for the final time! Grimaces all round!',
    'The final climb! Somebody fetch an oxygen tank!',
  ],
  hill2_pam: [
    'Not so chatty now.',
    'The Hill always wins in the end.',
    'Somebody is bargaining with a higher power.',
    'Arms everywhere. Form nowhere.',
    'Watch for the false summit. It gets them every time.',
    'They hate this bit. I love this bit.',
    'Lap two Hill. The truth comes out.',
    'Several regrets being formed right now.',
    'No hiding place up here.',
    'That one\'s gone a funny colour.',
  ],
  lap: [
    'Through the halfway point! {a} leads, {b} keeping tabs!',
    'Lap one in the bag! {a} in front, {b} second!',
    'Back past the start! {a} heads {b}!',
    'We\'re halfway! {a} leading the charge, {b} on the tail!',
    'Halfway! {a} leads them past the start, {b} next!',
    'Bell lap! Well, there\'s no bell! But {a} leads from {b}!',
    'One lap done! {a} at the front, {b} in pursuit!',
    'That\'s lap one! {a} leads, {b} close behind!',
    'Halfway through, and it\'s {a} from {b}!',
    'Lap one complete! It\'s {a}! Then {b}! Then chaos!',
    'Through halfway, {a} ahead of {b}!',
    'Past the start again! {a} leads, {b} lurking!',
  ],
  lap_pam: [
    'Lap two. Same course. Worse legs.',
    'Once more round. Then breakfast.',
    'Halfway, and nobody has fallen in the lake. Yet.',
    'Plenty of race left. Too much, some would say.',
    'The second lap is just the first lap with regret.',
    'They know what\'s coming now. That\'s the problem.',
    'I\'d stop here, personally.',
    'Halfway. Or, as they say, the easy half.',
    'Same again, please. Only slower.',
    'Lap two is where people discover their personality.',
    'Plenty of time for it all to go wrong.',
    'Still all to play for. Annoyingly.',
  ],
  final_stretch: [
    'Into the final straight! {a}! {b}! Everything left!',
    'The finish is calling! {a} leads, {b} won\'t give up!',
    'Last few hundred! {a} ahead, {b} chasing like a terrier!',
    'Into the final stretch! {a} leads! Can {b} catch them?',
    'Here they come! The finish is in sight! {a} from {b}!',
    'Final few hundred metres! {a} in front! {b} chasing!',
    'This is it! Home straight! {a}! {b}!',
    'Down to the finish they come! {a} leading, {b} on the charge!',
    'The funnel awaits! {a} is in front, {b} is coming!',
    'Final stretch! Can {a} hold on? Here comes {b}!',
    'Last push! {a}! {b}! Who wants it more?',
    'Finish line in sight! {a} ahead of {b}! Unbelievable!',
    'Here we go! Home stretch! {a} leads {b}!',
  ],
  finish_win: [
    '{a} takes the tape! Not that there\'s tape! But still!',
    '{a} wins! Book the open-top bus!',
    '{a} is the champion! The ducks are going wild!',
    '{a} wins it! {a} wins it!',
    'And it\'s {a}! First across the line!',
    '{a} takes the victory! What a run!',
    'Yes! {a}! Champion of Finsbury Park!',
    '{a} crosses the line first! Get in!',
    'Victory for {a}! Somebody give that runner a biscuit!',
    'It\'s {a}! The winner! I\'m welling up!',
    'And {a} has done it! Magnificent!',
    '{a} wins! Arms up! Glorious!',
    'First home, {a}! Take a bow!',
    'Winner, winner, post-run dinner! It\'s {a}!',
    'It\'s {a} by a distance! Well, by a bit!',
  ],
  finish_photo: [
    'Photo finish! Get the magnifying glass! It\'s {a} over {b}!',
    'On the line! {a} pips {b}! Unbelievable!',
    'Photo finish! I can\'t separate them! {a} just gets it from {b}!',
    'Oh, it\'s TIGHT! {a} edges {b} on the line!',
    'By a whisker! {a} from {b}! Did you see that?',
    'Too close to call! No, it\'s {a}! Just!',
    'A dead heat! Almost! {a} pips {b}!',
    'Nothing in it! {a} by a nose from {b}!',
    'Lean! Lean! {a} leans and takes it from {b}!',
    'You couldn\'t fit a bus ticket between them! {a} wins it!',
  ],
  finish_photo_pam: [
    'A nose. Possibly a nostril.',
    'Lean training pays off.',
    'I\'d appeal, if appeals were a thing at parkrun.',
    'I\'d want to see the replay.',
    '{bS} will be thinking about that for weeks.',
    'Heartbreak. Delicious heartbreak.',
    'That\'s the dip finish they practise in the mirror.',
  ],
  finish_second: [
    '{a} home in second! Silver! Well, plastic token!',
    'Runner-up, {a}! Gutsy!',
    '{a} crosses for second! Chin up!',
    'Second for {a}! The first of the losers, but what a loser!',
    'And {a} grabs second!',
    '{a} takes second!',
    'Second for {a}! Not bad at all!',
    'And {a} is home in second!',
    'In comes {a} for the runner-up spot!',
    'Second place, {a}! Silver medal! Metaphorically!',
  ],
  finish_last: [
    'And last across the line, {a}! The tail walker applauds!',
    '{a} rolls in fifth! Lovely to see!',
    'Here\'s {a}, finishing! Somebody fetch a banana!',
    'Fifth place, {a}! Better than a lie-in! Probably!',
    'And finally, {a} brings up the rear!',
    'Last but not least, it\'s {a}!',
    'Here comes {a}, last of our five, but still smiling! Sort of!',
    'And {a} completes the set! Lovely effort!',
    'Bringing up the rear, {a}! Every finisher counts!',
    '{a} home last! Still beat everyone on the sofa!',
    'Last home, {a}! The tail walker sends their regards!',
    '{a} finishes! Fifth! Of five! Proudly!',
  ],
  finish_last_pam: [
    'He was saving himself for next week.',
    'Plenty of time to think on that one.',
    'That\'s the scenic route.',
    'The tail walker overtook him. Twice.',
    'Someone has to hold the field together.',
    'Last, but beautifully hydrated.',
    'Somebody had to.',
    'Character building.',
    'He\'ll say his watch was wrong.',
    'There\'s always next week.',
    'The café will still be open. Just.',
    'That\'s a long walk to the coffee van.',
  ],
  finale_close: [
    'Can\'t split them! {a} and {b} together!',
    'Elbow to elbow! {a}! {b}!',
    'Nothing in it! {a} and {b} shoulder to shoulder!',
    'Side by side! {a}! {b}! I can\'t look!',
    '{b} is right on the shoulder of {a}!',
    'Neck and neck! Who has the legs?',
    'It\'s a drag race to the line! {a} and {b}!',
    '{a} can hear {b} breathing! It\'s that close!',
  ],
  finale_lead: [
    '{a} still holds on! {b} is {gap} metres back!',
    'The gap is {gap} metres! {b} needs to go now!',
    '{a} leads by {gap} metres! {b} is digging in!',
    '{gap} metres the gap! Can {b} close it?',
    '{b} is chasing hard! {a} still {gap} metres up!',
    'Still {a}! {b} needs a miracle, or a strong tailwind!',
    '{a} with daylight! {b} giving everything!',
  ],
  finale_big: [
    '{a} is home and hosed! The rest are racing for pride!',
    '{a} is cruising now! Waving, almost!',
    'Massive lead for {a}! Somebody tell the others!',
    '{a} has time to stop for a coffee! Don\'t, though!',
    'It would take a disaster to stop {a} now! A goose, perhaps!',
    '{a} out on their own! Daylight second!',
  ],
  finale_second: [
    'Behind, a proper scrap for second! {b} and {c}!',
    'Never mind the winner, look at {b} and {c} fighting for second!',
    '{c} is hunting down {b}! Second place is up for grabs!',
    'The battle for the minor placings! {b} versus {c}!',
    '{b} and {c} going hammer and tongs for second!',
    'Second place: {b}, with {c} breathing down their neck!',
  ],
  lead_swap: [
    'They\'re swapping the lead like a hot potato!',
    'Another change at the front! I\'ve lost count!',
    'The lead is changing hands every few seconds! Chaos!',
    'Who\'s leading? Everybody! Nobody! I don\'t know!',
  ],
  callback_good: [
    'And remember, {s} {said}! It\'s paying off!',
    'Told you! {s} {said}!',
    'Well, the clues did say {s} {said}!',
    'Was it obvious? {s} {said}!',
  ],
  callback_surprise: [
    'Not bad for someone who {said}!',
    'This from a runner who {said}! Incredible!',
    'And this is the one who {said}! Make it make sense!',
  ],
  callback_bad: [
    'Ah. {s} {said}. Chickens, meet roost.',
    'In fairness, {s} {said}.',
    'Well, {s} {said}. What did we expect?',
    'You could see this coming. {s} {said}.',
  ],
  callback_private: [
    'One of you on that sofa knew {s} {said}. Just saying.',
    'A little bird told one of you that {s} {said}. Did you listen?',
    'Somebody\'s secret clue said {s} {said}. Interesting.',
  ],
  filler_pam: [
    'A dog has entered the course. It is not a contender.',
    'There\'s a man doing tai chi by the lake. He\'s more composed than any of these.',
    'The geese are watching. They\'re not impressed.',
    'Someone\'s Garmin just told them they\'ve run four kilometres. It\'s lying.',
    'I see a buggy runner gaining on the field. Humiliating.',
    'Lovely leaves this time of year. Underfoot, they\'re lethal.',
    'Somebody\'s shouting split times. Nobody\'s listening.',
    'The marshal at the corner is doing an excellent clap. Underrated skill.',
    'I believe that pigeon is trying to join the race.',
    'This is the bit where everyone wonders why they get up on Saturdays.',
    'One of the marshals is eating a sausage roll. Respect.',
    'Somebody\'s left a coffee cup on the bench. That\'s my coffee cup.',
    'I\'m told the café has run out of croissants. That\'s the real story today.',
    'The tennis players are pretending not to watch. They\'re watching.',
    'A child is outrunning a grown man on the far side. Lovely.',
    'Plenty of heavy breathing. Mostly from Jeff.',
    'Someone\'s playing drum and bass from a phone speaker. Tremendous.',
    'There\'s mud on that corner. There\'s always mud on that corner.',
  ],
  filler_jeff: [
    'What a spectacle! What a park! What a morning!',
    'I\'ve not been this excited since the egg and spoon at Wanstead!',
    'You can feel the tension! Or is that my breakfast?',
    'This is why we do it, Pam! This is why!',
    'Look at the arm swing! Textbook! Absolutely textbook!',
    'Somebody is going to win this! I can feel it!',
    'The crowd are going wild! Well, the ducks are!',
    'Every one of these runners is a hero to me! Even that one!',
    'Look at that form! Look at that hair! Look at everything!',
    'I\'ve got goosebumps! Or I\'m cold! Either way!',
  ],
  wildcard_wait: [
    'Still waiting for {a}. Has anyone checked the café?',
    'And {a} is still out there. Enjoying the scenery, I imagine.',
    'Somebody send a search party for {a}!',
    '{a} is taking the scenic route. All of it.',
    'Any sign of {a}? No? Lovely day for it, though.',
    'I think {a} has stopped to feed the ducks.',
  ],
  gap_pam: [
    'The volunteers are already eyeing up the cake.',
    'Somewhere, a barcode is being scanned. Magic.',
    'Lovely bit of running, this. If you like running.',
    'I can see a family of geese judging everyone.',
    'The timekeeper is pressing that button like it owes him money.',
    'There\'s a toddler on the sidelines with better form than most.',
    'Someone has left their hoodie on the fence. It\'ll be there till Easter.',
    'Plenty of grimacing. Very little smiling. Classic parkrun.',
    'If you\'re just joining us, nothing has made sense so far.',
    'The squirrels are betting on this too, I\'m told.',
  ],
  gap_jeff: [
    'Come on! Every single one of you! Come on!',
    'What a sport! What a sport this is!',
    'I love this! I love all of it!',
    'Listen to the crowd! Well, the three people and a dog!',
    'Hearts pounding, lungs bursting! Glorious!',
    'Absolutely bonkers scenes in North London!',
  ],
  wildcard_mid: [
    '{a} appears to be out for a gentle Saturday jog. In a race. Bold.',
    'I\'m not sure {a} knows this is a race, Pam.',
    'Is {a} stopping to chat? I think {a} is stopping to chat!',
  ],
  diversion1: [
    'Hang on! {a} has veered off towards the funfair!',
    'Where is {a} going? That\'s the fairground!',
    '{a} has left the course! Straight towards the candyfloss!',
    'Wait, wait! {a} has gone off piste! Towards the waltzers!',
    'Oh no! {a} has been lured away by the funfair!',
    'What is {a} doing? That is not the course! That is a hook-a-duck stall!',
  ],
  diversion1_pam: [
    'He\'s spotted the hook-a-duck. We\'ve lost him.',
    'Candyfloss before ten. Disgraceful. Understandable.',
    'Somebody\'s been promised a goldfish.',
    'The waltzers. It\'s always the waltzers.',
    'I\'d do the same, frankly.',
    'There goes his race plan. Into a coconut shy.',
  ],
  diversion2: [
    'He\'s gone back to the funfair! Second lap, same distraction!',
    '{a} is off to the fairground AGAIN!',
    'Not again! {a} veers off for another go on the rides!',
    'Back to the funfair goes {a}! He can\'t resist!',
  ],
  diversion2_pam: [
    'He did say he\'d win a goldfish.',
    'Unfinished business with the hook-a-duck.',
    'Second helping of candyfloss. Of course.',
    'The dodgems called. He answered.',
  ],
  rejoin: [
    'And {a} rejoins the course, clutching a goldfish!',
    '{a} is back on the course! Smelling faintly of doughnuts!',
    'Here\'s {a}, back from the fair! What did we miss?',
    '{a} has rejoined! With candyfloss in his hair!',
    'Back on track, {a}! A bit sticky, but back!',
    '{a} returns! The goldfish appears to be cheering him on!',
  ],
};

// ---------- results ----------
const R = {
  res_winner_backed: [
    '{name} only went and backed {a}! Genius! Or luck!',
    '{name} saw it coming! Pay out, pay out!',
    'Winner backed by {name}! Somebody pass the sunglasses!',
    '{name} backed the winner! Pay that player!',
    'Celebrations on the sofa! {name} called it!',
    '{name} had {a}! Get the bunting out!',
    'Kerching! {name} is in the money!',
    '{name} read that perfectly! Take a bow!',
  ],
  res_longshot: [
    'A {odds} shot comes in! Sensational!',
    '{a} at {odds}! Who saw that? Hands up! Liars!',
    'A {odds} winner! The bookies are weeping into their ledgers!',
    'The outsider wins at {odds}! I told you! I didn\'t tell you!',
    '{odds}! Nobody saw that coming! Well, almost nobody!',
    'What a shock! {a} at {odds}!',
  ],
  res_fav: [
    'The favourite! Who\'d have thought it? Everyone, actually!',
    'Form holds! The bookies smile smugly!',
    'Favourite wins! Boring, but profitable!',
    'The favourite delivers! Pam has woken up to complain!',
    'The favourite obliges! Sometimes the obvious is obvious.',
    'Favourite wins. Pam is asleep.',
    'No shocks! The market had it right!',
    'The jolly does the business!',
  ],
  res_heartbreak: [
    'Oh, {name}. {a} lost by a whisker. That one will sting.',
    'Heartbreak for {name}! So close, and yet, completely zero parkpounds.',
    '{name} was a lean away from glory.',
    'Agonising for {name}. Second is just first loser, as they say.',
  ],
  res_nobody: [
    'The winner went completely unbacked! Not one parkpound!',
    'Nobody had {a}! Nobody! Not even a little bit!',
    'An unbacked winner! The bookie is buying the drinks!',
    'Nobody backed the winner! The house wins! Well, there is no house. The air wins.',
    'Not a single parkpound on {a}! Shameful!',
    'Zero bets on the winner. You lot need to read your clues.',
  ],
  res_bigloss: [
    '{name} has lost {loss} parkpounds this round. Ouch.',
    'A bruising round for {name}: down {loss}.',
    '{name} is {loss} lighter. The wallet weeps.',
  ],
  res_bigwin: [
    '{name} is up {gain} parkpounds! Drinks on {name}!',
    'Massive round for {name}! Plus {gain}!',
    '{name} pockets {gain}! The sofa has a new millionaire! Not literally.',
  ],
  res_pam: [
    'Interesting choices all round. Interesting is not a compliment.',
    'I\'d like to say I\'m surprised.',
    'The ducks would have bet better.',
    'Next round, perhaps try reading the clues.',
    'And that, ladies and gentlemen, is why we don\'t gamble on real money.',
    'Same time next week. Unfortunately.',
    'I need a sit down. And I\'ve been sitting down.',
    'Lovely. Can I go home now?',
    'Clues, people. They\'re called clues for a reason.',
    'I\'ve seen worse decisions. Mostly from Jeff.',
    'Somebody\'s going to be insufferable at dinner.',
    'Just a reminder: the money isn\'t real. The shame is.',
  ],
};

const ALL = { ...B, ...R };
export const LINE_BANKS = ALL;

// Turn a bank entry into [{speaker, text}] (alternating speakers).
export function expand(entry, lead, vars) {
  const parts = entry.split(' || ');
  const other = lead === 'jeff' ? 'pam' : 'jeff';
  return parts.map((t, i) => ({ speaker: i % 2 === 0 ? lead : other, text: fill(t, vars) }));
}
export function line(rng, mem, group, lead, vars) {
  const { entry, id } = pickLineId(rng, mem, group, ALL[group]);
  return expand(entry, lead, vars).map((l) => Object.defineProperty(l, '_lid', { value: id, enumerable: false }));
}

export const speechSeconds = (text) => countWords(text) * 0.38 + 0.7;

// ---------- pre-race ----------
export function introLines(rng, mem, { title, wildcard }) {
  const out = [...line(rng, mem, 'intro_jeff', 'jeff', { title }), ...line(rng, mem, 'intro_pam', 'pam', {})];
  if (wildcard) out.push(...line(rng, mem, 'wildcard_intro', 'jeff', {}));
  return out;
}

export function betReactions(rng, mem, round, betsByPlayer, players) {
  const pub = round.public;
  const R = new Map(pub.runners.map((r) => [r.id, r]));
  const fav = [...pub.runners].sort((a, b) => a.odds.win - b.odds.win)[0];
  const out = [];
  const winBacked = {};
  for (const p of players) {
    const bets = betsByPlayer?.[p.id] || [];
    const wins = bets.filter((b) => b.type === 'win');
    for (const b of wins) (winBacked[b.runnerId] ??= []).push(p.name);
  }
  // shared backing first
  const shared = Object.entries(winBacked).find(([, names]) => names.length >= 2 && players.length >= 2);
  if (shared) out.push(...line(rng, mem, 'bet_same', 'jeff', { a: R.get(shared[0]).nickname }));
  for (const p of players) {
    const bets = betsByPlayer?.[p.id] || [];
    const name = p.name;
    if (!bets.length) { out.push(...line(rng, mem, 'bet_none', 'jeff', { name })); continue; }
    const wins = bets.filter((b) => b.type === 'win').sort((a, b) => b.stake - a.stake);
    const h2h = bets.filter((b) => b.type === 'h2h');
    const top = wins[0];
    if (top && !(shared && shared[0] === top.runnerId && wins.length === 1)) {
      const r = R.get(top.runnerId);
      const vars = { name, a: r.nickname, stake: top.stake, odds: spokenOdds(r.odds.display) };
      const total = bets.reduce((s, b) => s + b.stake, 0);
      if (wins.length >= 3) out.push(...line(rng, mem, 'bet_split', 'jeff', vars));
      else if (r.odds.win >= 7) out.push(...line(rng, mem, 'bet_longshot', 'jeff', vars));
      else if (top.stake >= 250 || top.stake >= 0.5 * total && top.stake >= 150) out.push(...line(rng, mem, 'bet_big', 'jeff', vars));
      else if (r.id === fav.id) out.push(...line(rng, mem, 'bet_fav', 'jeff', vars));
      else out.push(...line(rng, mem, 'bet_big', 'jeff', vars));
    } else if (h2h.length) {
      const m = pub.matchups.find((x) => x.id === h2h[0].matchupId);
      if (m) {
        const pick = R.get(h2h[0].pick), other = R.get(h2h[0].pick === m.a ? m.b : m.a);
        out.push(...line(rng, mem, 'bet_h2h', 'jeff', { name, a: pick.nickname, b: other.nickname }));
      }
    }
  }
  out.push(...line(rng, mem, 'bet_closed', 'jeff', {}));
  return out;
}

// ---------- race commentary ----------
// ctx: { plan, runners (public, with shortName), clues: {runnerId: {public: clue, private: [clue]}}, wildcardId, rng, mem }
export function raceCommentary(ctx) {
  const { plan, rng, mem } = ctx;
  const byId = new Map(ctx.runners.map((r) => [r.id, r]));
  const nm = (id) => byId.get(id)?.nickname ?? id;
  const sn = (id) => byId.get(id)?.shortName ?? nm(id);
  const dur = plan.timeMap.durationS;
  const cand = []; // {t, lines:[{speaker,text}], priority, eventRef, minGapAfter}
  const add = (t, lines, priority, eventRef, latest = 3) => { if (lines?.length) cand.push({ t: Math.max(0.3, t), lines, priority, eventRef, latest }); };
  const runnersAt = (raceS) => rankAt(plan.runners, raceS);
  const ev = plan.events;
  const leadChanges = ev.filter((e) => e.type === 'lead_change');
  const winner = plan.finishOrder[0], last = plan.finishOrder.at(-1);

  add(0.4, line(rng, mem, 'start', 'jeff', {}), 1, null, 1);
  add(6, line(rng, mem, 'start_pam', 'pam', {}), 3, null, 6);
  // early leader (if nobody changes lead before ~30 s broadcast)
  const tEarly = 13;
  if (!ev.some((e) => (e.type === 'lead_change' && e.atM >= 400 || e.type === 'breakaway') && e.broadcastS < tEarly + 8)) {
    const lead = runnersAt(broadcastToRace(plan.timeMap, tEarly))[0];
    add(tEarly, line(rng, mem, 'early_leader', 'jeff', { a: nm(lead) }), 2, null, 6);
  }
  let lastLeadT = -99, swapSaid = false;
  const calledBack = new Set();
  const cbOnce = (id, dir) => { if (calledBack.has(id)) return null; const c = callback(ctx, id, dir); if (c) calledBack.add(id); return c; };
  for (const e of ev) {
    const t = e.broadcastS;
    if (e.type === 'lead_change') {
      if (e.atM < 400) continue; // start scrum noise
      const winT = ev.find((x) => x.type === 'finish' && x.place === 1)?.broadcastS ?? 1e9;
      if (winT - t < 6) continue; // the finish line call covers it
      const late = e.atM > 4000;
      const vars = { to: nm(e.to), from: nm(e.from), toS: sn(e.to), fromS: sn(e.from) };
      if (e.atM <= 3500 && t - lastLeadT < 11) { // rapid-fire swaps: one "hot potato" line instead of a list
        if (!swapSaid) { add(t, line(rng, mem, 'lead_swap', 'jeff', {}), 2, e, 3); swapSaid = true; }
        lastLeadT = t;
        continue;
      }
      add(t, line(rng, mem, late ? 'lead_change_late' : 'lead_change', 'jeff', vars), late || e.atM > 3500 ? 1 : 2, e, 2.5);
      if (!late && rng.chance(0.45)) add(t + 4.5, line(rng, mem, 'lead_change_pam', 'pam', vars), 3, e, 4);
      const cb = cbOnce(e.to, 'up') || (late ? cbOnce(e.from, 'down') : null);
      if (cb) add(t + 5, cb, 2, e, 6);
      lastLeadT = t;
    } else if (e.type === 'overtake') {
      if (Math.abs(t - lastLeadT) < 6 || leadChanges.some((l) => Math.abs(l.broadcastS - t) < 5)) continue;
      const rk = runnersAt(e.raceS + 7);
      const pos = rk.indexOf(e.by) + 1;
      if (pos > 3 && rng.chance(0.7)) continue;
      add(t, line(rng, mem, 'overtake', 'jeff', { by: nm(e.by), on: nm(e.on) }), 3, e, 2);
    } else if (e.type === 'breakaway') {
      add(t, line(rng, mem, 'breakaway', 'jeff', { who: nm(e.who) }), 2, e, 3);
      add(t + 5, (rng.chance(0.5) && cbOnce(e.who, 'up')) || line(rng, mem, 'breakaway_pam', 'pam', {}), 3, e, 5);
    } else if (e.type === 'hill') {
      add(t, line(rng, mem, e.lap === 1 ? 'hill1' : 'hill2', 'jeff', {}), 2, e, 4);
      add(t + 5, line(rng, mem, e.lap === 1 ? 'hill1_pam' : 'hill2_pam', 'pam', {}), 3, e, 5);
    } else if (e.type === 'lap') {
      const o = e.order || runnersAt(e.raceS);
      add(t, line(rng, mem, 'lap', 'jeff', { a: nm(o[0]), b: nm(o[1]) }), 2, e, 4);
      add(t + 5, line(rng, mem, 'lap_pam', 'pam', {}), 3, e, 5);
    } else if (e.type === 'final_stretch') {
      const o = e.order || runnersAt(e.raceS);
      add(t, line(rng, mem, 'final_stretch', 'jeff', { a: nm(o[0]), b: nm(o[1]) }), 1, e, 3);
    } else if (e.type === 'finish') {
      if (e.place === 1) {
        const photo = plan.summary.winningMarginS <= 2;
        add(t, line(rng, mem, photo ? 'finish_photo' : 'finish_win', 'jeff', { a: nm(e.who), b: nm(plan.finishOrder[1]) }), 0, e, 1.5);
        if (photo) add(t + 4.5, line(rng, mem, 'finish_photo_pam', 'pam', { bS: sn(plan.finishOrder[1]) }), 2, e, 3);
      } else if (e.place === 2 && plan.summary.winningMarginS > 2) {
        add(t, line(rng, mem, 'finish_second', 'jeff', { a: nm(e.who) }), 3, e, 3);
      } else if (e.who === last) {
        add(t, line(rng, mem, 'finish_last', 'jeff', { a: nm(e.who) }), 2, e, 4);
        add(t + 4.5, line(rng, mem, 'finish_last_pam', 'pam', {}), 3, e, 4);
      }
    } else if (e.type === 'diversion') {
      const g = e.lap === 1 ? 'diversion1' : 'diversion2';
      add(t, line(rng, mem, g, 'jeff', { a: nm(e.who) }), e.lap === 1 ? 1 : 2, e, 2);
      const end = e.endBroadcastS ?? t + 8;
      const roomy = end - t >= 10;
      add(roomy ? t + 4.6 : end + 4.8, line(rng, mem, `${g}_pam`, 'pam', {}), 2, e, 3);
      if (e.endBroadcastS != null) add(end, line(rng, mem, 'rejoin', 'jeff', { a: nm(e.who) }), e.lap === 1 ? 1 : 2, e, 3);
    }
  }
  // finale: position updates through the slow-motion run-in
  const fs = ev.find((e) => e.type === 'final_stretch')?.broadcastS;
  const winT = ev.find((e) => e.type === 'finish' && e.place === 1)?.broadcastS;
  if (fs != null && winT != null) {
    let bigSaid = 0, secondSaid = false;
    for (let tb = fs + 7; tb < winT - 5; tb += 7.5) {
      const rs = broadcastToRace(plan.timeMap, tb);
      const d = plan.runners.map((r) => ({ id: r.id, m: distanceAt(r.progress, rs) })).sort((a, b) => b.m - a.m);
      const gap = Math.round(d[0].m - d[1].m), gap2 = d[1].m - d[2].m;
      let g = gap < 8 ? 'finale_close' : gap <= 45 ? 'finale_lead' : 'finale_big';
      if (g === 'finale_big' && (bigSaid >= 1 || gap2 < 10) && !secondSaid && gap2 < 25) { g = 'finale_second'; secondSaid = true; }
      else if (g === 'finale_big' && bigSaid >= 1) continue;
      if (g === 'finale_big') bigSaid++;
      add(tb, line(rng, mem, g, 'jeff', { a: nm(d[0].id), b: nm(d[1].id), c: nm(d[2].id), gap }), 2, null, 3);
    }
  }
  if (ctx.wildcardId) {
    const tw = dur * 0.42;
    add(tw, line(rng, mem, 'wildcard_mid', 'jeff', { a: nm(ctx.wildcardId) }), 2, null, 8);
  }
  // fillers through the long middle section
  for (let t = 20; t < dur * 0.7; t += 11) {
    const who = rng.chance(0.65) ? 'pam' : 'jeff';
    add(t + rng.next() * 3, line(rng, mem, `filler_${who}`, who, {}), 4, null, 6);
  }
  // private-clue callback once, mid-race, about a runner doing well
  const priv = privateCallback(ctx);
  if (priv) add(dur * 0.55, priv, 3, null, 10);

  let out = schedule(cand, dur, mem);
  // second pass: if the broadcast has a long silence (e.g. a straggler miles behind), drop in a light filler
  const fourth = ev.find((e) => e.type === 'finish' && e.place === plan.runners.length - 1)?.broadcastS ?? dur;
  const extra = [];
  let waits = 0;
  const ts = [0, ...out.map((l) => l.broadcastS), dur];
  for (let i = 1; i < ts.length; i++) {
    if (ts[i] - ts[i - 1] < 16) continue;
    for (let t = ts[i - 1] + 7; t < ts[i] - 7; t += 9) {
      const late = ctx.wildcardId && t > fourth && plan.finishOrder.at(-1) === ctx.wildcardId && waits++ < 2;
      const who = late ? 'jeff' : rng.chance(0.6) ? 'pam' : 'jeff';
      extra.push({ t, lines: line(rng, mem, late ? 'wildcard_wait' : `gap_${who}`, who, { a: nm(ctx.wildcardId) }), priority: 4, eventRef: null, latest: 3 });
    }
  }
  if (extra.length) out = schedule([...cand, ...extra], dur, mem);
  return out;
}

function clueFor(ctx, id) { return ctx.clues?.[id]; }
// a callback line for a runner going up (taking the lead) or down (losing it), using the PUBLIC clue
function callback(ctx, id, dir) {
  const c = clueFor(ctx, id)?.public;
  if (!c || !c.said || c.family === 'fluff' || Math.abs(c.signal ?? 0) < 5) return null;
  const s = ctx.runners.find((r) => r.id === id)?.shortName;
  const suggestsFast = c.signal < 0;
  if (dir === 'up') return suggestsFast ? line(ctx.rng, ctx.mem, 'callback_good', 'jeff', { s, said: c.said }) : line(ctx.rng, ctx.mem, 'callback_surprise', 'pam', { s, said: c.said });
  return !suggestsFast ? line(ctx.rng, ctx.mem, 'callback_bad', 'pam', { s, said: c.said }) : null;
}
function privateCallback(ctx) {
  const w = ctx.plan.finishOrder[0];
  for (const id of [w, ctx.plan.finishOrder[1]]) {
    const priv = clueFor(ctx, id)?.private || [];
    const c = priv.find((x) => x.said && x.family !== 'fluff' && (x.signal ?? 0) < -5);
    if (c) return line(ctx.rng, ctx.mem, 'callback_private', 'pam', { s: ctx.runners.find((r) => r.id === id)?.shortName, said: c.said });
  }
  return null;
}

// Greedy scheduler: place by priority; keep >= MIN_GAP between line starts and never overlap speech.
const MIN_GAP = 4.6;
function schedule(cand, dur, mem) {
  const placed = [];
  const fits = (t, d) => placed.every((p) => t >= p.t + Math.max(MIN_GAP, p.d + 1.0) || t + Math.max(MIN_GAP, d + 1.0) <= p.t);
  const sorted = cand.map((c, i) => ({ ...c, i })).sort((a, b) => a.priority - b.priority || a.t - b.t);
  for (const c of sorted) {
    // multi-line entries (jeff || pam) are placed as consecutive lines
    let t0 = null;
    const ds = c.lines.map((l) => speechSeconds(l.text));
    for (let shift = 0; shift <= c.latest; shift += 0.25) {
      const t = c.t + shift;
      let ok = true, tt = t;
      for (const d of ds) { if (!fits(tt, d) || tt > dur + 6) { ok = false; break; } tt += Math.max(MIN_GAP, d + 0.8); }
      if (ok) { t0 = t; break; }
    }
    if (t0 == null) {
      if (c.priority <= 1) { // must-say: displace lower-priority lines that collide
        const t = c.t;
        for (let k = placed.length - 1; k >= 0; k--) if (placed[k].priority > c.priority && Math.abs(placed[k].t - t) < MIN_GAP + 3) placed.splice(k, 1);
        let tt = t; let ok = true;
        for (const d of ds) { if (!fits(tt, d)) { ok = false; break; } tt += Math.max(MIN_GAP, d + 0.8); }
        if (ok) t0 = t;
      }
      if (t0 == null) continue;
    }
    let tt = t0;
    c.lines.forEach((l, k) => { placed.push({ t: tt, d: ds[k], priority: c.priority, ...l, _lid: l._lid, eventRef: c.eventRef }); tt += Math.max(MIN_GAP, ds[k] + 0.8); });
  }
  // give back unspoken templates so later rounds can still use them
  const spoken = new Set(placed.map((p) => p._lid));
  for (const c of cand) for (const l of c.lines) if (l._lid && !spoken.has(l._lid)) releaseLine(mem, l._lid);
  placed.sort((a, b) => a.t - b.t);
  return placed.map((p) => ({ broadcastS: Math.round(p.t * 100) / 100, text: p.text, speaker: p.speaker, priority: Math.max(1, Math.min(3, p.priority)), ...(p.eventRef ? { eventRef: { type: p.eventRef.type, raceS: p.eventRef.raceS } } : {}) }));
}

// ---------- results commentary ----------
export function resultsLines(rng, mem, { round, players, payouts, winner, winnerOdds, favId, margin, heartbreak }) {
  const out = [];
  const backers = players.filter((p) => (payouts[p.id]?.bets || []).some((b) => b.type === 'win' && b.runnerId === winner.id));
  if (winnerOdds.win >= 7) out.push(...line(rng, mem, 'res_longshot', 'jeff', { a: winner.nickname, odds: spokenOdds(winnerOdds.display) }));
  else if (winner.id === favId) out.push(...line(rng, mem, 'res_fav', 'jeff', {}));
  if (backers.length) for (const p of backers) out.push(...line(rng, mem, 'res_winner_backed', 'jeff', { name: p.name, a: winner.nickname }));
  else if (players.some((p) => (payouts[p.id]?.bets || []).length)) out.push(...line(rng, mem, 'res_nobody', 'jeff', { a: winner.nickname }));
  for (const h of heartbreak) out.push(...line(rng, mem, 'res_heartbreak', 'pam', { name: h.name, a: h.nickname }));
  for (const p of players) {
    const net = payouts[p.id]?.net ?? 0;
    if (net >= 300) out.push(...line(rng, mem, 'res_bigwin', 'jeff', { name: p.name, gain: net }));
    else if (net <= -200) out.push(...line(rng, mem, 'res_bigloss', 'pam', { name: p.name, loss: -net }));
  }
  out.push(...line(rng, mem, 'res_pam', 'pam', {}));
  return out;
}
