import Resource from 'Class/resource.js';
import resources from "Class/resource.js";
import Good from "./Class/good";
import goods from "./Class/good";

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
document.getElementById('commandInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        const command = e.target.value;
        document.getElementById('output').innerText += `\n> ${command}\n`;
        e.target.value = '';
        // Add your command handling logic here
    }
});