import Chance from 'chance';
const chance = Chance();

const fakeUSerData = () => {
    return chance.name({ middle: true });
}

export default fakeUSerData;



