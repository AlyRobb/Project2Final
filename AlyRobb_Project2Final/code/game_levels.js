var GAME_LEVELS = [
  ["xxxxx                                                                      xxxxx",
   "xxxxx                                                                      xxxxx",
   "xxxxx                                                                      xxxxx",
   "xxxxx                                                                      xxxxx",
   "xxxxx                                                                      xxxxx",
   "xxxxx                                                                      xxxxx",
   "xxxxx                                               y      y               xxxxx",
   "xxxxx  y                         y                 zzz     zz              xxxxx",
   "xxxxx y y                            y       zzz                           xxxxx",
   "xxxxx  y                   zzz                          y                  xxxxx",
   "xxxxx                 zzz          zzzzz       zzz         y               xxxxx",
   "xxxxxzzzzzz     zz                                                         xxxxx",
   "xxxxx                                        zz                            xxxxx",
   "xxxxx                                                                      xxxxx",
   "xxxxx                           y        zzzzz                   y y y     xxxxx",
   "xxxxx            o             y y                      p                  xxxxx",
   "xxxxx @         xxx        p                           xxx       xxxxx   p xxxxx",
   "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz     zzzzzzzzzzzzzzzzzzz     zzzzzzz!!!zzzzzzzzzzz",
   "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz     zzzzzzzzzzzzzzzzzzx     xzzzzzz///zzzzzzzzzzz",
   "zzzzzzzzzz!!!!!!!!!!!!!!!!!!!!!!!!xzzzzzzzzzzzzzzzzzzx!!!!!xzzzzzz///zzzzzzzzzzz",
   "zzzzzzzzzz////////////////////////xzzzzzzzzzzzzzzzzzzx/////xzzzzzz///zzzzzzzzzzz",
   "zzzzzzzzzz///////////////////////xxzzzzzzzzzzzzzzzzzzxxxxxxxzzzzzz///zzzzzzzzzzz",
   "zzzzzzzzzz///////////////////////xxzzzzzzzzzzzzzzzzzzxxxxxxxzzzzzz///zzzzzzzzzzz"],
  ["xxxxx                                                                                                        xxxxx",
   "xxxxx    @                                                                                                   xxxxx",
   "xxxxxzzzzzzz                                                                                                 xxxxx",
   "xxxxx              p                                                                                         xxxxx",
   "xxxxx        zzzzzzz         y                                                                    y   y   y  xxxxx",
   "xxxxx                                                                                                       xxxxxx",
   "xxxxx                   zzzzzzz     y                                                          xxxxxxxxxxxxxxxxxxxx",
   "xxxxx                                                                                      p    !!!!!!!!!!!!xxxxxx",
   "xxxxx                                                                                     xxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxx                          zzzzzzz      p                                        zz                     xxxxxx",
   "xxxxx                                  zzzzzzz                                              y               xxxxxx",
   "xxxxx                                          x   y x                           xxx         xxx            xxxxxx",
   "xxxxx                                          x   y x                           x x     zzz x x            xxxxxx",
   "xxxxx                                          x     x                             x   y     x              xxxxxx",
   "xxxxx                                          x   y x                             xxzz      x              xxxxxx",
   "xxxxx                                          xx    x                                    y  x              xxxxxx",
   "xxxxx                                          x   y x               y   y               zzzzx              xxxxxx",
   "xxxxx                                                 y                   o                                 xxxxxx",
   "xxxxx                                                               zzzzzzzzzzz      zz                     xxxxxx",
   "xxxxx                                             zzzzzzz                                                   xxxxxx",
   "xxxxx                                                                                                       xxxxxx",
   "xxxxxxx                                                                                                     xxxxxx",
   "xxxxx !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxx",
   "!!!!x x!!!!!!x/////////x!!!!!!////////////////////////////////////////////////////////////////////////////////////",
   "////x x//////x/////////x/////x////////////////////////////////////////////////////////////////////////////////////",
   "////x x//////x/////////x/////x////////////////////////////////////////////////////////////////////////////////////",
   "////x x//////x/////////x/////x////////////////////////////////////////////////////////////////////////////////////",
   "////x x//////x/////////x//////////////////////////////////////////////////////////////////////////////////////////",
   "////x x//////x/////////x//////////////////////////////////////////////////////////////////////////////////////////",
   "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"],
  ["zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
   "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
   "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
   "x                     @                      x",
   "x                                            x",
   "x                      y                     x",
   "x                                            x",
   "x                  y       p                 x",
   "x                     y                      x",
   "x                      y                     x",
   "x                       y                    x",
   "x                  o                         x",
   "x                    y      !                x",
   "x             p                              x",
   "x                      y                     x",
   "x            !                               x",
   "x                           y                x",
   "x               !                            x",
   "x                    y                       x",
   "x                       y                    x",
   "x                                            x",
   "x               y                            x",
   "x                       !                    x",
   "x                   y                        x",
   "x         p                                  x",
   "x                      y     !               x",
   "x                                            x",
   "x                                            x",
   "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
   "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
   "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"],
  ["zzzzzz       zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
   "zzzzzz   @   zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
   "zzzzzz       zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
   "zzzzzz       zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
   "xxxxxx    y               y                         x",
   "xxxxxx                    y      y               p  x",
   "xxxxxx  y                xxx      z                 x",
   "xxxxxx                                   y          x",
   "xxxxxx                                  zz          x",
   "xxxxxx                                           y  x",
   "xxxxxx                                         xxxx x",
   "xxxxxx       p                           y          x",
   "xxxxxx                        y         zzz         x",
   "xxxxxx                       y  y                   x",
   "xxxxxx                       zzzzz                  x",
   "xxxxxx                                              x",
   "xxxxxx               zzzz                o          x",
   "xxxxxx                                  zzz         x",
   "xxxxxx    y     zz          zz                   y  x",
   "xxxxxx                  !!!!!!!!!!!!!!!!!!!!!!!     x",
   "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
   "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"],
   ["zz  zz   zz   zz   zz     zzz  zz  zzz  zz  zz  zz",
    "  zz    z  z  zz   zz       zz zz zz    zz  z z zz",
    "  zz     zz     zzz           zzzz      zz  zz   z",]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
