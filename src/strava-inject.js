(function injectGolf() {

    const golf = 'Golf';
    let activityTypeSelect = document.getElementById('activity_type');

    /** Check if there is already a golf activity */
    function hasGolfActivity() {
        for (activity of activityTypeSelect.options) {
            if (activity.value === golf) {
                return true;
            }
        }

        return false;
    }

    /** Create a new golf select option */
    function createGolfOption() {
        var option = document.createElement('option');
        option.value = option.innerText = golf;

        return option;
    }

    /** Check if the current activity is a golf activity - basic validation: true if Golf is in the title of the page. */
    function isGolfActivity() {
        return document.title.includes(golf);
    }

    if (activityTypeSelect && !hasGolfActivity()) {
        activityTypeSelect.appendChild(createGolfOption());

        if (isGolfActivity()) {
            activityTypeSelect.value = golf;
        }
    }
    
})();