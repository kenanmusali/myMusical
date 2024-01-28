document.querySelector('#toggleDark').addEventListener('click', () => {
    document.body.classList.toggle('dark1');

    // Define a mapping between base class names and dark class names
    const classMappings = {
        'topNavigator': 'dark2',
        'searchInput': 'dark3',
        // 'searchInput:placeholder': 'dark4',
        'languageButton': 'dark5',
        'resumeButton': 'dark6',
        'resume': 'dark7',
        'language': 'dark7',
        'dark-lightMode': 'dark8',
        'sideNavigator': 'dark9',
        'profileIcon': 'dark10',
        'fourSection': 'dark10',
        'twoSection': 'dark10',
        'rectangle1': 'dark11',
        'rectangle2': 'dark11',
        'rectangle3': 'dark11',
        'rectangle4': 'dark11',
        'rectangle5': 'dark11',
        'rectangle6': 'dark11',
        'rectangle7': 'dark11',
        'rectangle8': 'dark11',
        'copyright': 'dark12',
        'homeSection': 'dark13',
        'h1': 'dark14',
        'primaryText': 'dark15',
        '': 'dark16',
        '': 'dark17',
        '': 'dark18',
        '': 'dark19',
        '': 'dark20',

    };

    // Iterate over each key in the mapping and toggle the corresponding dark class
    Object.keys(classMappings).forEach(baseClass => {
        const element = document.querySelector(`.${baseClass}`);
        if (element) {
            const darkClass = classMappings[baseClass];
            element.classList.toggle(darkClass);
        }
    });
});