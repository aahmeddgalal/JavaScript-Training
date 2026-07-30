// js is a single threaded(But still can multitask) non-blocking lang
// the delay is the minimal delay time not the exact time
// V8 engine 
// WebAPIs, Task Queue, Event Loop (NOT A PART OF JS) BY the BROWSER
// settimeout, intervals, fetching data across teh network, promises

// async function journey
// callStack => WebAPIs(Finishes eg timeout) => taskQueue (waits until the callStack is empty) => callStack => executed
// event loop keeps eye on both callStack and taskQueue