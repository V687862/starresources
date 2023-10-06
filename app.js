class Resource {
    constructor(name) {
        this.name = name;
    }
}

class Good {
    constructor(name, resources) {
        this.name = name;
        this.resources = resources;
    }
}

const ISOCENTERED_MAGNET = 'Isocentered Magnet';
const TAU_GRADE_RHEOSTAT = 'Tau Grade Rheostat';
const AUSTENITIC_MANIFOLD = 'Austenitic Manifold';
const ISOTOPIC_COOLANT = 'Isotopic Coolant';
const MAG_PRESSURE_TANK = 'Mag Pressure Tank';
const REACTIVE_GAUGE = 'Reactive Gauge';
const ZERO_WIRE = 'Zero Wire';
const COMM_RELAY = 'Comm Relay';
const MONOPROPELLANT = 'Monopropellant';

const COPPER = '(Cu) Copper';
const COBALT = '(Co) Cobalt';
const BERYLLIUM = '(Be) Beryllium';
const SILVER = '(Ag) Silver';
const ALUMINUM = '(Al) Aluminum';
const NICKEL = '(Ni) Nickel';
const IONIC_LIQUIDS = '(IL) Ionic Liquids';
const TETRAFLUORIDES = '(XF4) Tetrafluorides';
const ALKANES = '(HnCn) Alkanes';
const IRON = '(Fe) Iron';
const WATER = '(H2O) Water';
const HELIUM = '(He) Helium';
const LEAD = '(Pb) Lead';
const CHLORINE = '(Cl) Chlorine';
const ARGON = '(Ar) Argon';
const URANIUM = '(U) Uranium';
const CHLOROSILANES = '(SiH3Cl) Chlorosilanes';
const IRIDIUM = '(Ir) Iridium';
const TUNGSTEN = '(W) Tungsten';
const FLUORINE = '(F) Fluorine';
const BENZENES = '(C6H6) Benzenes';
const TITANIUM = '(Ti) Titanium';
const LITHIUM = '(Li) Lithium';
const GOLD = '(Au) Gold';
const TANTALUM = '(Ta) Tantalum';
const PLATINUM = '(Pt) Platinum';
const VANADIUM = '(V) Vanadium';
const NEODYMIUM = '(Nd) Neodymium';
const CARBOXYLIC_ACIDS = '(RCOOH) Carboxylic Acids';
const MERCURY = '(Hg) Mercury';
const CAESIUM = '(Cs) Caesium';
const PALLADIUM = '(Pd) Palladium';
const NEON = '(Ne) Neon';
const EUROPIUM = '(Eu) Europium';
const PLUTONIUM = '(Pu) Plutonium';
const XENON = '(Xe) Xenon';
const YTTERBIUM = '(Yb) Ytterbium';
const ANTIMONY = '(Sb) Antimony';
const ALDUMITE = '(Ad) Aldumite';
const AQUEOUS_HEMATITE = '(H2FeO3) Aqueous Hematite';
const CAELUMITE = '(Ca) Caelumite';
const DYSPROSIUM = '(Dy) Dysprosium';
const INDICITE = '(In) Indicite';
const ROTHICITE = '(Rt) Rothicite';
const TASINE = '(Ts) Tasine';
const VERYL = '(Vy) Veryl';
const VYTINIUM = '(Vt) Vytinium';


const resources = {
    [Resources.COPPER]: createResource(Resources.COPPER),
    [Resources.COBALT]: createResource(Resources.COBALT),
    [Resources.BERYLLIUM]: createResource(Resources.BERYLLIUM),
    [Resources.SILVER]: createResource(Resources.SILVER),
    [Resources.ALUMINUM]: createResource(Resources.ALUMINUM),
    [Resources.NICKEL]: createResource(Resources.NICKEL),
    [Resources.IONIC_LIQUIDS]: createResource(Resources.IONIC_LIQUIDS),
    [Resources.TETRAFLUORIDES]: createResource(Resources.TETRAFLUORIDES),
    [Resources.ALKANES]: createResource(Resources.ALKANES),
    [Resources.IRON]: createResource(Resources.IRON),
    [Resources.WATER]: createResource(Resources.WATER, true),
    [Resources.HELIUM]: createResource(Resources.HELIUM, true),
    [Resources.LEAD]: createResource(Resources.LEAD, true),
    [Resources.CHLORINE]: createResource(Resources.CHLORINE, true),
    [Resources.ARGON]: createResource(Resources.ARGON, true),
    [Resources.URANIUM]: createResource(Resources.URANIUM, true),
    [Resources.CHLOROSILANES]: createResource(Resources.CHLOROSILANES, true),
    [Resources.IRIDIUM]: createResource(Resources.IRIDIUM, true),
    [Resources.TUNGSTEN]: createResource(Resources.TUNGSTEN, true),
    [Resources.FLUORINE]: createResource(Resources.FLUORINE, true),
    [Resources.BENZENES]: createResource(Resources.BENZENES, true),
    [Resources.TITANIUM]: createResource(Resources.TITANIUM, true),
    [Resources.LITHIUM]: createResource(Resources.LITHIUM, true),
    [Resources.GOLD]: createResource(Resources.GOLD, true),
    [Resources.TANTALUM]: createResource(Resources.TANTALUM, true),
    [Resources.PLATINUM]: createResource(Resources.PLATINUM, true),
    [Resources.VANADIUM]: createResource(Resources.VANADIUM, true),
    [Resources.NEODYMIUM]: createResource(Resources.NEODYMIUM, true),
    [Resources.CARBOXYLIC_ACIDS]: createResource(Resources.CARBOXYLIC_ACIDS, true),
    [Resources.MERCURY]: createResource(Resources.MERCURY, true),
    [Resources.CAESIUM]: createResource(Resources.CAESIUM, true),
    [Resources.PALLADIUM]: createResource(Resources.PALLADIUM, true),
    [Resources.NEON]: createResource(Resources.NEON, true),
    [Resources.EUROPIUM]: createResource(Resources.EUROPIUM, true),
    [Resources.PLUTONIUM]: createResource(Resources.PLUTONIUM, true),
    [Resources.XENON]: createResource(Resources.XENON, true),
    [Resources.YTTERBIUM]: createResource(Resources.YTTERBIUM, true),
    [Resources.ANTIMONY]: createResource(Resources.ANTIMONY, true),
    [Resources.ALDUMITE]: createResource(Resources.ALDUMITE, true),
    [Resources.AQUEOUS_HEMATITE]: createResource(Resources.AQUEOUS_HEMATITE, true),
    [Resources.CAELUMITE]: createResource(Resources.CAELUMITE, true),
    [Resources.DYSPROSIUM]: createResource(Resources.DYSPROSIUM, true),
    [Resources.INDICITE]: createResource(Resources.INDICITE, true),
    [Resources.ROTHICITE]: createResource(Resources.ROTHICITE, true),
    [Resources.TASINE]: createResource(Resources.TASINE, true),
    [Resources.VERYL]: createResource(Resources.VERYL, true),
    [Resources.VYTINIUM]: createResource(Resources.VYTINIUM, true)
};

const goods = {
    [Goods.ISOCENTERED_MAGNET]: createGood(Goods.ISOCENTERED_MAGNET, [Resources.COPPER, Resources.COBALT]),
    [Goods.TAU_GRADE_RHEOSTAT]: createGood(Goods.TAU_GRADE_RHEOSTAT, [Resources.COPPER, Resources.BERYLLIUM]),
    [Goods.AUSTENITIC_MANIFOLD]: createGood(Goods.AUSTENITIC_MANIFOLD, [Resources.NICKEL, Resources.IRON]),
    [Goods.ISOTOPIC_COOLANT]: createGood(Goods.ISOTOPIC_COOLANT, [Resources.IONIC_LIQUIDS, Resources.TETRAFLUORIDES]),
    [Goods.MAG_PRESSURE_TANK]: createGood(Goods.MAG_PRESSURE_TANK, [Resources.NICKEL, Resources.ALUMINUM]),
    [Goods.REACTIVE_GAUGE]: createGood(Goods.REACTIVE_GAUGE, [Resources.ALUMINUM, Resources.COPPER]),
    [Goods.ZERO_WIRE]: createGood(Goods.ZERO_WIRE, [Resources.SILVER, Resources.COPPER]),
    [Goods.COMM_RELAY]: createGood(Goods.COMM_RELAY, [Goods.ISOCENTERED_MAGNET, Goods.TAU_GRADE_RHEOSTAT]),
    [Goods.MONOPROPELLANT]: createGood(Goods.MONOPROPELLANT, [Goods.MAG_PRESSURE_TANK, Resources.ALKANES]),
};
let outpostCount = 0;

function addOutpost() {
    outpostCount++;
    const outpostDiv = document.createElement("div");
    outpostDiv.id = `outpost${outpostCount}`;
    outpostDiv.innerHTML = `
        <h2>Outpost ${outpostCount}</h2>
        <label>Name: </label><input type="text" id="outpostName${outpostCount}">
        <br>
        <h3>Resources:</h3>
    `;

    Object.keys(resources).forEach(resourceName => {
        outpostDiv.innerHTML += `
            <input type="checkbox" id="${resourceName}-outpost${outpostCount}">
            <label for="${resourceName}-outpost${outpostCount}">${resourceName}</label>
            <br>
        `;
    });

    document.getElementById("outposts").appendChild(outpostDiv);
}

function canProduceGood(outpostResources, good) {
    return good.resources.every(resourceOrGood => {
        if (resourceOrGood instanceof Resource) {
            return outpostResources.includes(resourceOrGood);
        } else if (resourceOrGood instanceof Good) {
            return canProduceGood(outpostResources, resourceOrGood);
        }
        return false;
    });
}

function getProducableGoods(outpostResources) {
    return Object.values(goods).filter(good => canProduceGood(outpostResources, good));
}

function calculate() {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";  // Clear previous results

    const N = outpostCount; // Assuming outpostCount is global and contains the total number of outposts.
    const dp = new Array(1 << N).fill(0);

    // Helper function to get the resources for a bitmask combination.
    function getResourcesForCombination(mask) {
        let combinedResources = [];
        for (let j = 0; j < N; j++) {
            if ((mask & (1 << j)) !== 0) { // If j-th outpost is part of the combination.
                combinedResources = combinedResources.concat(getOutpostResources(j + 1));
            }
        }
        return combinedResources;
    }

    for (let mask = 0; mask < (1 << N); mask++) {
        const combinedResources = getResourcesForCombination(mask);
        const combinedGoods = getProducableGoods(combinedResources);
        const allMaterials = combinedResources.concat(combinedGoods);
        dp[mask] = Object.values(goods).filter(good => canProduceGood(allMaterials, good)).length;
    }

    // Identify the optimal combination.
    let maxGoodsProduced = Math.max(...dp);
    let optimalMask = dp.indexOf(maxGoodsProduced);

    let linkedOutposts = [];
    for (let j = 0; j < N; j++) {
        if ((optimalMask & (1 << j)) !== 0) {
            linkedOutposts.push(j + 1);
        }
    }

    // Display the individual outpost results (remains unchanged).
    for (let i = 1; i <= outpostCount; i++) {
        const outpostResources = getOutpostResources(i);
        const outpostGoods = getProducableGoods(outpostResources);
        const allOutpostMaterials = outpostResources.concat(outpostGoods);

        const manufacturableGoods = Object.values(goods).filter(good => canProduceGood(allOutpostMaterials, good));

        let output = `<h3>Outpost ${i}</h3>`;
        if (manufacturableGoods.length) {
            output += "Can manufacture: " + manufacturableGoods.map(g => g.name).join(", ");
        } else {
            output += "Cannot manufacture any goods with current resources.";
        }

        let p = document.createElement("p");
        p.innerHTML = output;
        resultsDiv.appendChild(p);
    }

    // Display the result for the optimal combination.
    let bestBaseOutpost = linkedOutposts[0];

    if (linkedOutposts.length > 1) {
        resultsDiv.innerHTML += `<p>The best outpost to get the maximum number of goods is: Outpost ${bestBaseOutpost} with Outposts ${linkedOutposts.slice(1).join(', ')} linked to Outpost ${bestBaseOutpost} producing ${maxGoodsProduced} goods.</p>`;
    } else {
        resultsDiv.innerHTML += `<p>The best outpost to get the maximum number of goods is: Outpost ${bestBaseOutpost} producing ${maxGoodsProduced} goods.</p>`;
    }
}

function getOutpostResources(outpostNumber) {
    const outpostResources = [];
    Object.values(resources).forEach(resource => {
        const checkbox = document.getElementById(`${resource.name}-outpost${outpostNumber}`);
        if (checkbox && checkbox.checked) {
            outpostResources.push(resource);
        }
    });
    return outpostResources;
}

window.onload = () => {
    addOutpost(); // Initialize with one outpost for users to start with.
}
document.getElementById("addOutpostBtn").addEventListener("click", addOutpost);
document.getElementById("calculateBtn").addEventListener("click", calculate);