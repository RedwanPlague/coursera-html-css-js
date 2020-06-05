document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    function randomNumber(min, max) {
        return Math.floor( Math.random() * (max - min) ) + min;
    }

    const charList = 'abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWZYZ`1234567890-=[]\\;\',./~!@#$%^&*()_+{}|:"<>?'.split('');
    var toWrite, typedCorrectly;
    const textFileCount = 20;
    readTextFile();
    var cursorPos = 0;
    var wrongTypedChars = 0, correctTypedChars = 0, startTime, endTime;

    function readTextFile() {
        var rawFile = new XMLHttpRequest();
        const file = './data/text' + randomNumber(0,textFileCount) + '.txt';
        rawFile.open('GET', file, true);
        rawFile.onreadystatechange = function () {
            if(rawFile.readyState === 4) {
                if(rawFile.status === 200 || rawFile.status == 0) {
                    toWrite = rawFile.responseText.slice(0,-1);
                    typedCorrectly = new Array(toWrite.length).fill(true);
                    const button = document.getElementById('start-button');
                    button.style.opacity = '1';
                    button.onclick = onButtonPress;
                }
            }
        };
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

        const gotRightChars = typedCorrectly.reduce((a,b) => a+b, 0);
        const gotRightWords = gotRightChars / 5;
        const wpm = gotRightWords / minutesNeeded;

        const totalTypedChars = correctTypedChars + wrongTypedChars;
        const typingAccuracy = 100 * correctTypedChars / totalTypedChars;
        const completionAccuracy = 100 * gotRightChars / toWrite.length;

        var result = 'Speed: ' + wpm.toFixed(2) + ' wpm<br>';
        result += 'Typing Accuracy: ' + typingAccuracy.toFixed(2) + '%<sup>(Characters you typed right)</sup><br>';
        result += 'Completion Accuracy: ' + completionAccuracy.toFixed(2) + '%<sup>(Characters you finally got right)</sup>';
        document.getElementById('results').innerHTML = result;

        const reloadButton = document.getElementById('reload');
        reloadButton.onclick = function() {
            location.reload();
        };
        reloadButton.style.opacity = '1';
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
                    correctTypedChars++;
                }
            }
            else if(charList.includes(key)) {
                if(cursorPos < toWrite.length) {
                    setBackground(cursorPos+1, 'red');
                    typedCorrectly[cursorPos] = false;
                    wrongTypedChars++;
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
