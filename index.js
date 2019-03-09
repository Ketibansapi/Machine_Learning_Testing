const brain = require ('brain.js');

const network = new brain.NeuralNetwork();
const net = new brain.NeuralNetwork();

//network.train([
//  { input: [0,0,0], output: [0] },
//  { input: [0,0,1], output: [0] },
//  { input: [0,1,1], output: [0] },
//  { input: [1,0,1], output: [1] },
//  { input: [1,1,1], output: [1] }
//]);

//const output = network.run([1,0,0]);

//console.log(`Prob: ${output}`);

net.train([{input: { r: 0.03, g: 0.7, b: 0.5 }, output: { black: 1 }},
           {input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 }},
           {input: { r: 0.5, g: 0.5, b: 1.0 }, output: { white: 1 }}]);

const output = net.run({ r: 1, g: 0.4, b: 0 });
