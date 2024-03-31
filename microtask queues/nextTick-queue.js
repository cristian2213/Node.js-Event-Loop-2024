/* 
    Flow of execution:
    1. console.log('1') 
        is added to the call stack and executed and finally deleted.

    2. process.nextTick(() => console.log('this is process.next 1')) 
        is added to the call stack, executed (when it's executed this process is sent to the nextTick queue.) and deleted.

    3. Because we have sync code and this code has priority above async code, 
        so the callback function inside the nextTick queue has to wait for its turn, 
        so the next step is to add the console.log('2') to the call stack, executed and finally deleted.
        
    4. Now that there aren't any async code to execute, 
        the nextTick queue callback is dequeued and pushed to the "call stack" where it's executed and finally detached.
*/
console.log('1');
process.nextTick(() => console.log('this is process.next 1'));
console.log('2');