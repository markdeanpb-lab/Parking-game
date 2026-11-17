# Bring up the loopback interface inside a fresh network namespace (used by the offline test harness).
import socket, fcntl, struct
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
ifr = struct.pack('16sH', b'lo', 0)
flags = struct.unpack('16sH', fcntl.ioctl(s, 0x8913, ifr))[1]  # SIOCGIFFLAGS
fcntl.ioctl(s, 0x8914, struct.pack('16sH', b'lo', flags | 0x1))  # SIOCSIFFLAGS IFF_UP
