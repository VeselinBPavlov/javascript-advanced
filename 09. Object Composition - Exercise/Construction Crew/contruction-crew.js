function constructionCrew(obj) {
    if (obj['handsShaking'] === true) {
        obj['bloodAlcoholLevel'] += (obj['weight'] * obj['experience']) / 10;
        obj['handsShaking'] = false;
    }
    return (obj);
}

// Test
constructionCrew({ weight: 80,
                    experience: 1,
                    bloodAlcoholLevel: 0,
                    handsShaking: true });
