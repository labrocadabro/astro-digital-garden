---
title: Node.js Notes
layout: /src/layouts/NoteLayout.astro
---

#to-write 

- node is a javascript runtime that runs on the chrome v8 engine

- what is an engine? how is it different from a compiler or interpreter?

- what is a runtime? what does it do that the engine doesn't and why doesn't the engine do everything?

- https://medium.com/@misbahulalam/uncover-the-javascript-engine-vs-runtime-6556ef449634

- what exactly does it mean that javascript is single threaded?

- what is the call stack, heap, and callback queue?

- what is the web api and what does it do exactly?

- what is the event loop and how does it work?

- https://stackoverflow.com/questions/29027845/what-is-the-difference-between-javascript-engine-and-javascript-runtime-environm

- 'javascript runs in a container' - what does this mean?

- node allows you to run javascript without a browser - does that mean the browser is a runtime (or has one)?

- https://stackabuse.com/using-global-variables-in-node-js/

- https://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/

- https://www.w3.org/wiki/JavaScript_best_practices

- https://www.toptal.com/javascript/comprehensive-guide-javascript-design-patterns

- [GitHub - airbnb/javascript: JavaScript Style Guide](https://github.com/airbnb/javascript)

- 'other platforms may need to recompile or roll all their code every time a request to run a certain command is made' - examples? When and why would this happen?

- 'javascript as a language supports event-driven development' - how? I thought the event loop was part of the web api? how does the event loop work then and what part of javascript implements it?

- ![[async-code-example.jpg]] example in book says logging to console will happen before the background color of an element is changed. Why is that? I thought those two instructions were synchronous so they would run in order

- node.js is not just for web applications, it can be used to run any javascript without a browser. but what are some examples of this? are there any books or tutorials that show how to use node to make something that isn't a web application?

  
  

## Chapter 0

- Node.js alllows developers to create full stack web applications all in one language. previously the backend was coded with a different languuage (python, ruby, c, etc)

- client-side (front end) vs server-side (back end) - node handles the back end. client side is the code you're used to writing when making web pages

- server-side code handles _application logic_ and involves tasks like authentication, scheduled tasks, and routing

- what is the difference between a web site and a web application? when does a site become an application?

- if node is running a popular website with many requests coming in, does it really handle everything on a single thread + the event loop? What does that look like?

- "node uses more threads only for tasks that can't be handled by the main thread" - how many threads can it create? how many processes can it realistically handle at once? the way I understand it is when tasks leave the main thread, they have to go on the callback queue and "wait their turn" to reenter the main thread - doesn't that get backed up?

- are the node.js event loop and the javascript event loop the same thing? or different implementations of the same idea? Do they differ in how they function?

- So node hands off tasks to other threads to be processed and when they completed, they go to the callback queue. They don't go to the callback queue to be worked on, which means tasks don't really "back up". It should also mean that the number of requests the server can handle is dependent on the number of threads it can create (in other words, how much computing power it has.)

- what is a process and how exactly is it related to a thread? a process is for handling tasks larger than a thread but also a process is required to create a thread - how does that work?

- node is single threaded so to add more threads it has to add more processes - why do it like that? would it be possible to run one multi-threaded process and get the same result?

- https://www.freecodecamp.org/news/node-js-child-processes-everything-you-need-to-know-e69498fe970a/

- because node only creates processes as needed, it can minimize the concurrencies for better performance - what's the tradeoff?

- node has gained prominence over other platforms for streaming and chat, why?

- Do people actually use the REPL for coding? Why?