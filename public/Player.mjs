Skip to content
wanwan011020

Selection deleted
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
▼
▼
▼
▼
▼
▼
▼
▼
▼
▼
▼
import { dimension } from './dimension.mjs';
class Player {
  constructor({x, y, score, id, radius = 30}) {
    this.x = x;
    this.y = y;
    this.score = score;
    this.id = id;
    // hitbox
    this.radius = radius;
        
  }
  
  movePlayer(dir, speed) {
    switch(dir) {
      case 'up':
        this.y  = Math.max(dimension.minY+this.radius, this.y - speed);
        break;
      case 'down':
        this.y  = Math.min(dimension.maxY-this.radius, this.y + speed);
        break;
      case 'left':
        this.x  = Math.max(dimension.minX+this.radius, this.x - speed);
        break;
      case 'right':
        this.x  = Math.min(dimension.maxX-this.radius, this.x + speed);
        break;
    }
  }
  
  collision(item) {
    var dx = this.x - item.x;
    var dy = this.y - item.y;
    var distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < this.radius + item.radius) {
      return true;
    }
    return false;
  }
  
  draw(context,img){
    // show the hitbox
    /*context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.stroke();*/
    context.drawImage(img, this.x-this.radius, this.y-this.radius, 2*this.radius, 2*this.radius);
  }
  
  calculateRank(arr) {
    const sort = arr.sort((a, b) => b.score - a.score);
    let position = 0
    sort.forEach((player, index) => {
      if(this.id === player.id) position = index+1;
    });
    
    return `Rank: ${position} / ${arr.length}`;
  }
  
}
try {
  module.exports = Player;
} catch(e) {}
export default Player;
Enable "Accessible Terminal" in Workspace Settings to use a screen reader with the console.
Booting Repl
Ready

