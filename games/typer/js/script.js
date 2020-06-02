document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    function randomNumber(min, max) {
        return Math.round( Math.random() * (max - min) ) + min;
    }

    const charList = 'abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWZYZ`1234567890-=[]\\;\',./~!@#$%^&*()_+{}|:"<>?'.split('');
    var toWrite, typedCorrectly;
    readTextFile();
    var cursorPos = 0;
    var wrongKeyStrokes = 0, correctKeyStrokes = 0, startTime, endTime;

    function readTextFile()
    {
        var rawFile = new XMLHttpRequest();
        const file = './texts/text' + randomNumber(0,5) + '.txt';
        rawFile.open('GET', file, true);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    toWrite = rawFile.responseText.slice(0,-1);
                    typedCorrectly = new Array(toWrite.length).fill(true);
                    const button = document.getElementById('start-button');
                    button.style.opacity = '1';
                    button.onclick = onButtonPress;
                }
            }
        }
        rawFile.send(null);
    }

    function onButtonPress() {
        this.remove(); // remove the button
        document.getElementById('time-shower').innerHTML = 'Starting in: <span></span>';
        startTimer(3, document.querySelector('#time-shower span'));
    }

    function setBackground(number, color) {
        const selector = '#type-area :nth-child(' + number + ')';
        document.querySelector(selector).style['background-color'] = color;
    }

    function showScore() {
        endTime = new Date();
        const minutesNeeded = (endTime - startTime) / 60000;
        const totalTypedChars = correctKeyStrokes + wrongKeyStrokes;
        const totalWords = totalTypedChars / 5;
        const wpm = totalWords / minutesNeeded;
        const accuracy = 100 * correctKeyStrokes / totalTypedChars;
        const gotRight = typedCorrectly.reduce((a,b) => a+b, 0);
        const effectiveAccuracy = accuracy * gotRight / toWrite.length;
        const effectiveWPM = wpm * effectiveAccuracy / 100;
        var result = 'Speed: ' + wpm.toFixed(2) + ' wpm<br>';
        result += 'Accuracy: ' + effectiveAccuracy.toFixed(2) + '%<br>';
        result += 'Effective Speed: ' + effectiveWPM.toFixed(2) + ' wpm';
        document.getElementById('results').innerHTML = result;
    }

    function typeStart() {
        var spanToAdd = '';
        for(var i = 0; i < toWrite.length; i++) {
            spanToAdd += '<span>' + toWrite.charAt(i) + '</span>';
        }
        spanToAdd += '<span id="enter">[Enter]</span>';
        document.getElementById('type-area').innerHTML = spanToAdd;
        startTime = new Date();
        document.addEventListener('keydown', event => {
            const key = event.key;
            if(key === toWrite.charAt(cursorPos)) {
                if(cursorPos < toWrite.length) {
                    setBackground(cursorPos+1, 'green');
                    cursorPos++;
                    correctKeyStrokes++;
                }
            }
            else if(charList.includes(key)) {
                if(cursorPos < toWrite.length) {
                    setBackground(cursorPos+1, 'red');
                    typedCorrectly[cursorPos] = false;
                    wrongKeyStrokes++;
                    cursorPos++;
                }
            }
            else if(key === 'Backspace') {
                if(cursorPos > 0 && cursorPos <= toWrite.length) {
                    setBackground(cursorPos, '');
                    cursorPos--;
                    typedCorrectly[cursorPos] = true;
                }
            }
            else if(key == 'Enter') {
                if(cursorPos == toWrite.length) {
                    cursorPos++;
                    correctKeyStrokes++;
                    document.querySelector('#type-area #enter').style['background-color'] = 'green';
                    showScore();
                }
            }
        });
    }

    function startTimer(seconds, display) {
        const sid = setInterval(function () {
            display.textContent = seconds;
            seconds--;
            if(seconds == -1) {
                clearInterval(sid);
                document.getElementById('time-shower').remove();
                typeStart();
            }
        }, 1000);
    }

});
