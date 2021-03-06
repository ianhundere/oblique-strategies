// Classes are for CSS styling
// "data attributes" are for JS

// #1 code will run when button is clicked
// const triggerElement = document.querySelector('[data-oblique]');
// const triggerElement = document.querySelector('[data-oblique]');
const outputImg = document.querySelector("[data-img]");
const outputElement = document.querySelector("[data-output]");


outputElement.addEventListener("click", () => {
    randomStrat(strat);
    outputElement.textContent = strat[0].text;
    outputImg.setAttribute("src", strat[0].url);
});
outputImg.addEventListener("click", () => {
    randomStrat(strat);
    outputElement.textContent = strat[0].text;
    outputImg.setAttribute("src", strat[0].url);
});

const strat = [
    {
        text: "(Organic) machinery",
        url: "https://i.imgur.com/nxUyI.png"
    },
    {
        text: "A line has two sides",
        url: "imgur.com/QuOfz.png"
    },
    {
        text: "A very small object         Its center",
        url: "x.imgur.com/ezN8FGp.jpg"
    },
    {
        text: "Abandon desire",
        url: "http://x.imgur.com/ONp7H.png"
    },
    {
        text: "Abandon normal instructions",
        url: "http://x.imgur.com/ptBNQ.png"
    },
    {
        text: "Abandon normal instruments",
        url: "http://x.imgur.com/5hZHV.png"
    },
    {
        text: "Accept advice",
        url: "http://x.imgur.com/usBXZ.png"
    },
    {
        text: "Accretion",
        url: "http://x.imgur.com/oIPtI.png"
    },
    {
        text: "Adding on",
        url: "http://x.imgur.com/Uuya4.png"
    },
    {
        text: "Allow an easement (an easement is the abandonment of a stricture)",
        url: "http://x.imgur.com/L629C.png"
    },
    {
        text: "Always first steps",
        url: "http://x.imgur.com/dE8dQ.png"
    },
    {
        text: "Always give yourself credit for having more than personality",
        url: "http://x.imgur.com/BE1dQ.png"
    },
    {
        text: "Always the first steps",
        url: "http://x.imgur.com/i9Qrp.png"
    },
    {
        text: "Are there sections?  Consider transitions",
        url: "http://x.imgur.com/QOWmA.png"
    },
    {
        text: "Ask people to work against their better judgement",
        url: "http://x.imgur.com/cHEPd.png"
    },
    {
        text: "Ask your body",
        url: "http://x.imgur.com/3k8CZ.png"
    },
    {
        text: "Assemble some of the elements in a group and treat the group",
        url: "http://x.imgur.com/UWfP7.png"
    },
    {
        text: "Balance the consistency principle with the inconsistency principle",
        url: "http://x.imgur.com/GPJof.png"
    },
    {
        text: "Be dirty",
        url: "http://x.imgur.com/DAnen.png"
    },
    {
        text: "Be extravagant",
        url: "http://x.imgur.com/vXZrv.png"
    },
    {
        text: "Be less critical",
        url: "http://x.imgur.com/woOpI.png"
    },
    {
        text: "Breathe more deeply",
        url: "http://x.imgur.com/sjbkR.png"
    },
    {
        text: "Bridges -build -burn",
        url: "http://x.imgur.com/RhBZi.png"
    },
    {
        text: "Cascades",
        url: "http://x.imgur.com/9nlVu.png"
    },
    {
        text: "Change ambiguities to specifics",
        url: "http://x.imgur.com/1dIaZ.png"
    },
    {
        text: "Change instrument roles",
        url: "http://x.imgur.com/qRkwi.png"
    },
    {
        text: "Change nothing and continue consistently",
        url: "http://x.imgur.com/KPu6M.png"
    },
    {
        text: "Change nothing and continue with immaculate consistency",
        url: "http://x.imgur.com/ApPqb.png"
    },
    {
        text: "Change specifics to ambiguities",
        url: "http://x.imgur.com/nlESJ.png"
    },
    {
        text: "Children   -speaking     -singing",
        url: "http://x.imgur.com/AqtUt.png"
    },
    {
        text: "Cluster analysis",
        url: "http://x.imgur.com/xQ1iq.png"
    },
    {
        text: "Consider different fading systems",
        url: "http://x.imgur.com/IxqwK.png"
    },
    {
        text: "Consider transitions",
        url: "http://x.imgur.com/wwvWb.png"
    },
    {
        text: "Consult other sources   -promising   -unpromising",
        url: "http://x.imgur.com/Icr7f.png"
    },
    {
        text: "Convert a melodic element into a rhythmic element",
        url: "http://x.imgur.com/aVCX0.png"
    },
    {
        text: "Courage!",
        url: "http://x.imgur.com/x6eCi.png"
    },
    {
        text: "Cut a vital connection",
        url: "http://x.imgur.com/BLdc3.png"
    },
    {
        text: "Decorate, decorate",
        url: "http://x.imgur.com/lLFyY.png"
    },
    {
        text: 'Define an area as "safe" and use it as an anchor',
        url: "http://x.imgur.com/RSBMs.png"
    },
    {
        text: "Destroy nothing; Destroy the most important thing",
        url: "http://x.imgur.com/q6ivM.png"
    },
    {
        text: "Discard an axiom",
        url: "http://x.imgur.com/cMnQ9.png"
    },
    {
        text: "Disciplined self-indulgence",
        url: "http://x.imgur.com/DzHU8.png"
    },
    {
        text: "Disconnect from desire",
        url: "http://x.imgur.com/AeBqB.png"
    },
    {
        text: "Discover the recipes you are using and abandon them",
        url: "http://x.imgur.com/wXr2X.png"
    },
    {
        text: "Discover your formulas and abandon them",
        url: "http://x.imgur.com/le9h9.png"
    },
    {
        text: "Display your talent",
        url: "http://x.imgur.com/DCw0i.png"
    },
    {
        text: "Distort time",
        url: "http://x.imgur.com/xDGpR.png"
    },
    {
        text: "Do nothing for as long as possible",
        url: "http://x.imgur.com/3WoDy.png"
    },
    {
        text: "Do something boring",
        url: "http://x.imgur.com/rIIe7.png"
    },
    {
        text: "Do something sudden, destructive and unpredictable",
        url: "http://x.imgur.com/0McED.png"
    },
    {
        text: "Do the last thing first",
        url: "http://x.imgur.com/wUr1V.png"
    },
    {
        text: "Do the washing up",
        url: "http://x.imgur.com/RqsoC.png"
    },
    {
        text: "Do the words need changing?",
        url: "http://x.imgur.com/i0mEI.png"
    },
    {
        text: "Do we need holes?",
        url: "http://x.imgur.com/NxozO.png"
    },
    {
        text: "Don't avoid what is easy",
        url: "http://x.imgur.com/LDoLI.png"
    },
    {
        text: "Don't be frightened of cliches",
        url: "http://x.imgur.com/b3gV3.png"
    },
    {
        text: "Don't break the silence",
        url: "http://x.imgur.com/H5Gol.png"
    },
    {
        text: "Don't stress on thing more than another [sic]",
        url: "http://x.imgur.com/Ao7qZ.png"
    },
    {
        text: "Don't stress one thing more than another",
        url: "http://x.imgur.com/ywhvw.png"
    },
    {
        text: "Don't be afraid of things because they're easy to do",
        url: "http://x.imgur.com/rqrtO.png"
    },
    {
        text: "Don't be frightened to display your talents",
        url: "http://x.imgur.com/fZKfD.png"
    },
    {
        text: "Emphasize differences",
        url: "http://x.imgur.com/qjyWq.png"
    },
    {
        text: "Emphasize repetitions",
        url: "http://x.imgur.com/6DECE.png"
    },
    {
        text: "Emphasize the flaws",
        url: "http://x.imgur.com/49pnL.png"
    },
    {
        text: "Faced with a choice, do both",
        url: "http://x.imgur.com/pUF28.png"
    },
    {
        text: "Feed the recording back out of the medium",
        url: "http://x.imgur.com/EdHik.png"
    },
    {
        text: "Fill every beat with something",
        url: "http://x.imgur.com/qt6W6.png"
    },
    {
        text: "Find a safe part and use it as an anchor",
        url: "http://x.imgur.com/vpF6w.png"
    },
    {
        text: "Get your neck massaged",
        url: "http://x.imgur.com/IWVJ3.png"
    },
    {
        text: "Ghost echoes",
        url: "http://x.imgur.com/jI1jG.png"
    },
    {
        text: "Give the game away",
        url: "http://x.imgur.com/YsvzS.png"
    },
    {
        text: "Give the name away",
        url: "http://x.imgur.com/bEerY.png"
    },
    {
        text: "Give way to your worst impulse",
        url: "http://x.imgur.com/eTC2h.png"
    },
    {
        text: "Go outside. Shut the door.",
        url: "http://x.imgur.com/LWbQW.png"
    },
    {
        text: "Go slowly all the way round the outside",
        url: "http://x.imgur.com/JCQSM.png"
    },
    {
        text: "Go to an extreme, come part way back",
        url: "http://x.imgur.com/OT0Sl.png"
    },
    {
        text: "Honor thy error as a hidden intention",
        url: "http://x.imgur.com/v8ZZI.png"
    },
    {
        text: "Honor thy mistake as a hidden intention",
        url: "http://x.imgur.com/TcrzY.png"
    },
    {
        text: "How would someone else do it?",
        url: "http://x.imgur.com/AcP3S.png"
    },
    {
        text: "How would you have done it?",
        url: "http://x.imgur.com/EgsD2.png"
    },
    {
        text: "Humanize something free of error",
        url: "http://x.imgur.com/BtBiq.png"
    },
    {
        text: "Idiot glee (?)",
        url: "http://x.imgur.com/WRFVH.png"
    },
    {
        text: "Imagine the piece as a set of disconnected events",
        url: "http://x.imgur.com/nfV8i.png"
    },
    {
        text: "In total darkness, or in a very large room, very quietly",
        url: "http://x.imgur.com/Y55MR.png"
    },
    {
        text: "Infinitesimal gradations",
        url: "http://x.imgur.com/H7ExD.png"
    },
    {
        text: "Intentions   -nobility of  -humility of   -credibility of",
        url: "http://x.imgur.com/mFATH.png"
    },
    {
        text: "Into the impossible",
        url: "http://x.imgur.com/ZZmU3.png"
    },
    {
        text: "Is it finished?",
        url: "http://x.imgur.com/RM3Yl.png"
    },
    {
        text: "Is something missing?",
        url: "http://x.imgur.com/3totu.png"
    },
    {
        text: "Is the information correct?",
        url: "http://x.imgur.com/StD7R.png"
    },
    {
        text: "Is the style right?",
        url: "http://x.imgur.com/EbNh6.png"
    },
    {
        text: "Is there something missing",
        url: "http://x.imgur.com/Rnf7f.png"
    },
    {
        text: "It is quite possible (after all)",
        url: "http://x.imgur.com/fY1hl.png"
    },
    {
        text: "It is simply a matter or work",
        url: "http://x.imgur.com/XFjOn.png"
    },
    {
        text: "Just carry on",
        url: "http://x.imgur.com/E0WKb.png"
    },
    {
        text: "Left channel, right channel, center channel",
        url: "http://x.imgur.com/zhEbX.png"
    },
    {
        text: "Listen to the quiet voice",
        url: "http://x.imgur.com/ZjmMQ.png"
    },
    {
        text: "Look at the order in which you do things",
        url: "http://x.imgur.com/BOI2S.png"
    },
    {
        text: "Look closely at the most embarrassing details & amplify them",
        url: "http://x.imgur.com/pXTum.png"
    },
    {
        text: "Lost in useless territory",
        url: "http://x.imgur.com/bNEBn.png"
    },
    {
        text: "Lowest common denominator",
        url: "http://x.imgur.com/j2q7u.png"
    },
    {
        text: "Magnify the most difficult details",
        url: "http://x.imgur.com/nwYQW.png"
    },
    {
        text: "Make a blank valuable by putting it in an exquisite frame",
        url: "http://x.imgur.com/UJNF5.png"
    },
    {
        text: "Make a sudden, destructive unpredictable action; incorporate",
        url: "http://x.imgur.com/y0fcl.png"
    },
    {
        text:
            "Make an exhaustive list of everything you might do & do the last thing on the list",
        url: "http://x.imgur.com/y0fcl.png"
    },
    {
        text: "Make it more sensual",
        url: "http://x.imgur.com/jjTbe.png"
    },
    {
        text: "Make what's perfect more human",
        url: "http://x.imgur.com/GanXS.png"
    },
    {
        text: "Mechanicalize something idiosyncratic",
        url: "http://x.imgur.com/cSwfh.png"
    },
    {
        text: "Move towards the unimportant",
        url: "http://x.imgur.com/t1wcn.png"
    },
    {
        text: "Mute and continue",
        url: "http://x.imgur.com/DGOas.png"
    },
    {
        text: "Not building a wall but making a brick",
        url: "http://x.imgur.com/mKODb.png"
    },
    {
        text: "Once the search has begun, something will be found",
        url: "http://x.imgur.com/69lCv.png"
    },
    {
        text: "Only a part, not the whole",
        url: "http://x.imgur.com/KOO1O.png"
    },
    {
        text: "Only one element of each kind",
        url: "http://x.imgur.com/64uBY.png"
    },
    {
        text: "Openly resist change",
        url: "http://x.imgur.com/fVgNx.png"
    },
    {
        text: "Overtly resist change",
        url: "http://x.imgur.com/5kH62.png"
    },
    {
        text: "Pae White's non-blank graphic metacard",
        url: "http://x.imgur.com/fMGT2.png"
    },
    {
        text: "Put in earplugs",
        url: "http://x.imgur.com/my8IO.png"
    },
    {
        text: "Question the heroic approach",
        url: "http://x.imgur.com/4bdw3.png"
    },
    {
        text: "Reevaluation (a warm feeling)",
        url: "http://x.imgur.com/dluPv.png"
    },
    {
        text: "Remember quiet evenings",
        url: "http://x.imgur.com/W5WrU.png"
    },
    {
        text: "Remove a restriction",
        url: "http://x.imgur.com/mgYeG.png"
    },
    {
        text: "Remove ambiguities and convert to specifics",
        url: "http://x.imgur.com/VIzjT.png"
    },
    {
        text: "Remove specifics and convert to ambiguities",
        url: "http://x.imgur.com/zm5sz.png"
    },
    {
        text: "Repetition is a form of change",
        url: "http://x.imgur.com/QhMRR.png"
    },
    {
        text: "Retrace your steps",
        url: "http://x.imgur.com/3R24T.png"
    },
    {
        text: "Reverse",
        url: "http://x.imgur.com/XxzYC.png"
    },
    {
        text:
            "Short circuit (example; a man eating peas with the idea that they will improve  his virility shovels them straight into his lap)",
        url: "http://x.imgur.com/wTldo.png"
    },
    {
        text: "Simple Subtraction",
        url: "http://x.imgur.com/Vr95a.png"
    },
    {
        text: "Simply a matter of work",
        url: "http://x.imgur.com/1O8tl.png"
    },
    {
        text: "Slow preparation, fast execution",
        url: "http://x.imgur.com/AbjMs.png"
    },
    {
        text: "Spectrum analysis",
        url: "http://x.imgur.com/GHrCz.png"
    },
    {
        text: "State the problem in words as clearly as possible",
        url: "http://x.imgur.com/dJC3o.png"
    },
    {
        text: "Take a break",
        url: "http://x.imgur.com/Rl2go.png"
    },
    {
        text: "Take away the elements in order of apparent non-importance",
        url: "http://x.imgur.com/e6YnO.png"
    },
    {
        text: "Take away the important parts",
        url: "http://x.imgur.com/JDZtW.png"
    },
    {
        text: "Tape your mouth",
        url: "http://x.imgur.com/XIDiQ.png"
    },
    {
        text: "The inconsistency principle",
        url: "http://x.imgur.com/1c7ol.png"
    },
    {
        text: "The most easily forgotten thing is the most important",
        url: "http://x.imgur.com/Dhz37.png"
    },
    {
        text: "The most important thing is the thing most easily forgotten",
        url: "http://x.imgur.com/7x6fR.png"
    },
    {
        text: "The tape is now the music",
        url: "http://x.imgur.com/eQynj.png"
    },
    {
        text: "Think - inside the work -outside the work",
        url: "http://x.imgur.com/3dkPD.png"
    },
    {
        text: "Think of the radio",
        url: "http://x.imgur.com/3dkPD.png"
    },
    {
        text: "Tidy up",
        url: "http://x.imgur.com/5kQCi.png"
    },
    {
        text: "Towards the insignificant",
        url: "http://x.imgur.com/3dkPD.png"
    },
    {
        text: "Trust in the you of now",
        url: "http://x.imgur.com/fjUf9.png"
    },
    {
        text: "Try faking it",
        url: "http://x.imgur.com/2WJZT.png"
    },
    {
        text: "Turn it upside down",
        url: "http://x.imgur.com/jFgVt.png"
    },
    {
        text: "Twist the spine",
        url: "http://x.imgur.com/X2pSC.png"
    },
    {
        text: "Use unqualified' people",
        url: "http://x.imgur.com/cdDLk.png"
    },
    {
        text: "Use an old idea",
        url: "http://x.imgur.com/Pomy7.png"
    },
    {
        text: "Use an unacceptable color",
        url: "http://x.imgur.com/ZI1V6.png"
    },
    {
        text: "Use cliches",
        url: "http://x.imgur.com/5AIhT.png"
    },
    {
        text: "Use fewer notes",
        url: "http://x.imgur.com/uasI2.png"
    },
    {
        text: "Use filters",
        url: "http://x.imgur.com/2ysXr.png"
    },
    {
        text: "Use something nearby as a model",
        url: "http://x.imgur.com/hQhel.png"
    },
    {
        text: "Use your own ideas",
        url: "http://x.imgur.com/1QMxF.png"
    },
    {
        text: "Voice your suspicions",
        url: "http://x.imgur.com/YHN7w.png"
    },
    {
        text: "Water",
        url: "http://x.imgur.com/GdqW2.png"
    },
    {
        text: "What are the sections sections of?    Imagine a caterpillar moving",
        url: "http://x.imgur.com/84Tjc.png"
    },
    {
        text: "What are you really thinking about just now?",
        url: "http://x.imgur.com/WtQNc.png"
    },
    {
        text: "What context would look right?",
        url: "http://x.imgur.com/IJD9n.png"
    },
    {
        text: "What is the reality of the situation?",
        url: "http://x.imgur.com/3Iaro.png"
    },
    {
        text: "What is the simplest solution?",
        url: "http://x.imgur.com/Pb0Ff.png"
    },
    {
        text: "What mistakes did you make last time?",
        url: "http://x.imgur.com/9wIZP.png"
    },
    {
        text: "What to increase? What to reduce? What to maintain?",
        url: "http://x.imgur.com/k89Ms.png"
    },
    {
        text: "What were you really thinking about just now?",
        url: "http://x.imgur.com/e7Jan.png"
    },
    {
        text: "What would your closest friend do?",
        url: "http://x.imgur.com/2LSEj.png"
    },
    {
        text: "What wouldn't you do?",
        url: "http://x.imgur.com/EVAEA.png"
    },
    {
        text: "When is it for?",
        url: "http://x.imgur.com/jI9XA.png"
    },
    {
        text: "Where is the edge?",
        url: "http://x.imgur.com/tzrGN.png"
    },
    {
        text: "Which parts can be grouped?",
        url: "http://x.imgur.com/E9HWs.png"
    },
    {
        text: "Work at a different speed",
        url: "http://x.imgur.com/URSIm.png"
    },
    {
        text: "Would anyone want it?",
        url: "http://x.imgur.com/XkkzP.png"
    },
    {
        text: "You are an engineer",
        url: "http://x.imgur.com/Xh4J6.png"
    },
    {
        text: "You can only make one dot at a time",
        url: "http://x.imgur.com/J0vyv.png"
    },
    {
        text: "You don't have to be ashamed of using your own ideas",
        url: "http://x.imgur.com/e40jl.png"
    }
];

// addEventListener accepts 2 arguments:
// - a string that identifies the kind of event to listen for
// - a function that says what to do when the event happens
function randomStrat(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

modalBackground = document.getElementById('modal-background');
closeButton = document.getElementById('close-button');
openButton = document.getElementById('open-button');

modalBackground.addEventListener('click', (e) => {
    modalBackground.style.display = "none";
});
closeButton.addEventListener('click', (e) => {
    modalBackground.style.display = "none";
});

openButton.addEventListener('click', (e) => {
    modalBackground.style.display = "";
});
