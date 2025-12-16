
    const display = document.getElementById('display');

    function appendChar(char) {
        display.value += char;
    }

    function clearDisplay() {
        display.value = '';
    }

    function deleteChar() {
        display.value = display.value.slice(0, -1);
    }

    function calculate() {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = 'Error';
        }
    }
    function generateTable() {
    const rows = document.getElementById('rows').value;
    const cols = document.getElementById('cols').value;
    const formType = document.getElementById('formType').value;
    const container = document.getElementById('tableContainer');

    // Clear previous table
    container.innerHTML = '';

    // Create table element
    const table = document.createElement('table');

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');

            // Create form element based on user choice
            if (formType === 'checkbox') {
                const input = document.createElement('input');
                input.type = 'checkbox';
                td.appendChild(input);
            } else {
                const input = document.createElement('input');
                input.type = formType;
                td.appendChild(input);
            }

            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    container.appendChild(table);
}
