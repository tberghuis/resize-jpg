// requirement imagemagick is installed

const sh = require("shelljs");

const picDir = "/media/tom/tomseagate/Pictures/2019-08-10-malaysia";

sh.cd(picDir);
const { stdout } = sh.ls("*.jpg");
const pics = stdout.trim().split(/\n/);
pics.forEach(function(pic) {
  // TODO async or use mogrify
  sh.exec(`convert ${pic} -resize 50% -quality 80 resize/${pic}`);
});

console.log("finished");

// debugger;
