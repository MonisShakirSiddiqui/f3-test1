// script.js
document.addEventListener('DOMContentLoaded', () => {
    const currentCount = document.getElementById('current-count');
    const incrementBtn = document.getElementById('increment');
    const decrementBtn = document.getElementById('decrement');
    const clearBtn = document.getElementById('clear');
    const error = document.getElementById('error');

    function updateCount(count) {
        currentCount.innerHTML = count;
    }

    incrementBtn.addEventListener('click', () => {
        let count = parseInt(currentCount.innerHTML);
        count++;
        updateCount(count);
        if (count > 0) {
            clearBtn.style.display = 'block';
            error.style.visibility = 'hidden';
        }
    });

    decrementBtn.addEventListener('click', () => {
        let count = parseInt(currentCount.innerHTML);
        if (count > 0) {
            count--;
            updateCount(count);
            if (count === 0) {
                clearBtn.style.display = 'none';
            }
        } else {
            error.style.visibility = 'visible';
        }
    });

    clearBtn.addEventListener('click', () => {
        updateCount(0);
        clearBtn.style.display = 'none';
        error.style.visibility = 'hidden';
    });
});

