const args = [ 'start' ];
const opts = { stdio: 'inherit', cwd: 'music-client', shell: true };
require('child_process').spawn('npm', args, opts);
