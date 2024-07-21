//1. Target the form element in the DOM.
const formElement = document.querySelector('form');

//2. Attach an event listener to the form element to listen for any change events.
formElement.addEventListener('change', (e) => {
    //3. Inside the event listener:
    //  - Target the checkbox that triggered the change event.
    //  - Get the combat style of the triggering checkbox from its data-combat-style attribute.
    //  - Select all checkboxes from the DOM that share the same combat style as the triggering checkbox.
    const triggeringCheckbox = e.target;
    const combatStyle = triggeringCheckbox.getAttribute("data-combat-style");
    const conflictingCombatStyles = document.querySelectorAll(`[data-combat-style="${combatStyle}"]`);
    //3a. Next, loop over each checkbox with the matching combat style:
    //  - If: the checkbox being looped over is NOT the one that triggered the event,
    //    and the triggering checkbox is checked, then:
    //    - Disable the checkbox currently being looped over.
    //  - Else:
    //    - Do not change its state.
    for (let i = 0; i < conflictingCombatStyles.length; i++) {
        // if (conflictingCombatStyles[i] !== triggeringCheckbox && triggeringCheckbox.checked) {
        //     conflictingCombatStyles[i].disabled = true;
        // } else {
        //     conflictingCombatStyles[i].disabled = false;
        // }
        const conflictingCheckBox = conflictingCombatStyles[i];
        conflictingCheckBox.disabled = triggeringCheckbox.checked && conflictingCheckBox !== triggeringCheckbox;
    }
})



