---
title: Promises and Async/Await
layout: /src/layouts/NoteLayout.astro
---

.then() returns a promise

whatever one .then() returns will become the parameters of the callback function in the next .then()

res.josn() also returns a promise because:
	- response is sent when the headers are available and a promise is given for the body
	- res.json cannot convert the promise to json immediately so it waits for the body and then resolves with json or rejects due to invalid json

when a .then() contains a callback that also returns a promise, it is effectively bound to the inner promise and returns the inner promise's resolve or reject.

so in the example of res.json(), the next .then() will return the json object as the parameter because that is the result of the inner promise