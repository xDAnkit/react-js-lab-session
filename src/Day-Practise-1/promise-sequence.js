async function test() {
  console.log("a");

  console.log("b");

  const PromiseC = () =>
    new Promise((reply, reject) => {
      setTimeout(() => {
        console.log("c");
        reply("done");
      }, 1000);
    });

  const PromiseD = () =>
    new Promise((reply, reject) => {
      setTimeout(() => {
        console.log("d");
        reply("done");
      }, 0);
    });

  await PromiseC();
  await PromiseD();

  console.log("e");
}
test();
