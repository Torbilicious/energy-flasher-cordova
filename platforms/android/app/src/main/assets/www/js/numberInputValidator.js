var lastValue = 1111;

function validate(node) {
    if (node.value === "") {
        node.value = lastValue;
        return;
    }

    const numbersOnly = /^[1-9]{0,4}$/;
    let currentValue = node.value;
    let newValue = currentValue;

    if (!numbersOnly.test(currentValue)) {
        newValue = lastValue;
    }

    node.value = newValue;
    lastValue = node.value;
}