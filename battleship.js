let view = {
    displayMessage: function(msg) {
        let messageArea = document.getElementById('messageArea');
        messageArea.innerHTML = msg;
    },
    displayHit: function(location) {
        let cell = document.getElementById(location);
        cell.setAttribute('class', 'hit');
    },
    displayMiss: function(location) {
        let cell = document.getElementById(location);
        cell.setAttribute('class', 'miss');
    }
};

let ships = [{ location: ['10', '20', '30'], hits: ['', '', ''] },
             { location: ['32', '33', '34'], hits: ['', '', ''] },
             { location: ['63', '64', '65'], hits: ['', '', 'hit'] }];

//view.displayMiss('00');
//view.displayHit('34');
//view.displayMiss('55');
//view.displayHit('12');
//view.displayMiss('25');
//view.displayHit('26');
//view.displayMessage('Testing message')