import { Project } from httpsunpkg.comleopard@^1distindex.esm.js;

import Stage from .StageStage.js;
import Sprite6 from .Sprite6Sprite6.js;
import Sprite2 from .Sprite2Sprite2.js;
import Sprite3 from .Sprite3Sprite3.js;
import Sprite4 from .Sprite4Sprite4.js;
import Sprite5 from .Sprite5Sprite5.js;
import Sprite7 from .Sprite7Sprite7.js;
import Sprite8 from .Sprite8Sprite8.js;
import Sprite11 from .Sprite11Sprite11.js;
import Sprite1 from .Sprite1Sprite1.js;

const stage = new Stage({ costumeNumber 3 });

const sprites = {
  Sprite6 new Sprite6({
    x -4,
    y 19,
    direction 90,
    costumeNumber 4,
    size 100,
    visible true
  }),
  Sprite2 new Sprite2({
    x 215,
    y -145,
    direction 90,
    costumeNumber 1,
    size 100,
    visible false
  }),
  Sprite3 new Sprite3({
    x 185,
    y 152,
    direction 90,
    costumeNumber 1,
    size 100,
    visible true
  }),
  Sprite4 new Sprite4({
    x 36,
    y 28,
    direction 90,
    costumeNumber 1,
    size 100,
    visible false
  }),
  Sprite5 new Sprite5({
    x 36,
    y 28,
    direction 90,
    costumeNumber 1,
    size 100,
    visible false
  }),
  Sprite7 new Sprite7({
    x 31,
    y -11,
    direction 90,
    costumeNumber 1,
    size 100,
    visible false
  }),
  Sprite8 new Sprite8({
    x 223,
    y -41,
    direction 90,
    costumeNumber 1,
    size 100,
    visible false
  }),
  Sprite11 new Sprite11({
    x 36,
    y 28,
    direction 90,
    costumeNumber 1,
    size 100,
    visible true
  }),
  Sprite1 new Sprite1({
    x -199,
    y -29,
    direction 90,
    costumeNumber 6,
    size 100,
    visible true
  })
};

const project = new Project(stage, sprites);
export default project;