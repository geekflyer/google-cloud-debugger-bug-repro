require('@google-cloud/debug-agent').start({ allowExpressions: true, projectId: process.env.PROJECT });

setInterval(function() {
  // set snapshot point below
  const foo = Math.random();

  console.log(foo);
}, 500);
