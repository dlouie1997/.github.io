"use strict";

/********************types of ducks********************/
var changeAmericanBlackDuck = function() {
    document.getElementById("typesOfDuckPic").src = "images/americanBlackDuck.png";
    document.getElementById("typesOfDuckPic2").src = "images/americanBlackDuck2.png";
    document.getElementById("duckName").innerHTML = "American Black Duck";
    document.getElementById("duckOrder").innerHTML = "Anseriformes";
    document.getElementById("duckFamily").innerHTML = "Anatidae";
    document.getElementById("duckDescription").innerHTML = "The American Black Duck hides in plain sight in shallow wetlands of eastern North America. They often flock with the ubiquitous Mallard, where they look quite similar to female Mallards. But take a second look through a group of brown ducks to notice the dark chocolate-brown flanks, pale grayish face, and olive-yellow bill of an American Black Duck. Numbers of this shy but common duck declined sharply in the mid-twentieth century. Hunting restrictions have helped to stabilize their numbers, although habitat loss remains a problem.";
    document.getElementById("typesofDuckHabitat").src = "images/americanBlackDuckHabitat.png";
    document.getElementById("duckHabitat").innerHTML = "Look for American Black Ducks in both fresh and saltwater in eastern North America. They prefer protected bodies of water such as saltmarshes and ponds, and frequently mix with other species of ducks, especially Mallards. Among flocks of Mallards, look for a darker, colder-toned duck of similar size; in flight, the white underwings of American Black Ducks form a brighter, more contrasting flash than on a flying Mallard.";
    document.getElementById("duckFact1").innerHTML = "The oldest American Black Duck on record was 26 years, 5 months old.";
    document.getElementById("duckFact2").innerHTML = "Pleistocene fossils of American Black Ducks, at least 11,000 years old, have been unearthed in Florida and Georgia."; 
    document.getElementById("changeDuck1").classList.add("currentlySelectedDuck");
    document.getElementById("changeDuck2").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck3").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck4").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck5").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck6").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck7").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck8").classList.remove("currentlySelectedDuck");
}

var changeAmericanCoot = function() {
    document.getElementById("typesOfDuckPic").src = "images/americanCoot.png";
    document.getElementById("typesOfDuckPic2").src = "images/americanCoot2.png";
    document.getElementById("duckName").innerHTML = "American Coot";
    document.getElementById("duckOrder").innerHTML = "Gruiformes";
    document.getElementById("duckFamily").innerHTML = "Rallidae";
    document.getElementById("duckDescription").innerHTML = "The waterborne American Coot is one good reminder that not everything that floats is a duck. A close look at a coot—that small head, those scrawny legs—reveals a different kind of bird entirely. Their dark bodies and white faces are common sights in nearly any open water across the continent, and they often mix with ducks. But they’re closer relatives of the gangly Sandhill Crane and the nearly invisible rails than of Mallards or teal.";
    document.getElementById("typesofDuckHabitat").src = "images/americanCootHabitat.png";
    document.getElementById("duckHabitat").innerHTML = "You can find American Coots by scanning lakes and ponds for a small, all-black bird with a bright white bill. They may be at the edges, among vegetation, or out in open water; you may even see them walking around (not waddling) on land on their fairly long, yellow-green legs. In the winter, they can be found in massive flocks of coots and other waterfowl, sometimes numbering in the thousands of individuals.";
    document.getElementById("duckFact1").innerHTML = "Although it swims like a duck, the American Coot does not have webbed feet like a duck. Instead, each one of the coot’s long toes has broad lobes of skin that help it kick through the water. The broad lobes fold back each time the bird lifts its foot, so it doesn’t impede walking on dry land, though it supports the bird’s weight on mucky ground.";
    document.getElementById("duckFact2").innerHTML = "The oldest known American Coot lived to be at least 22 years 4 months old.";
    document.getElementById("changeDuck1").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck2").classList.add("currentlySelectedDuck");
    document.getElementById("changeDuck3").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck4").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck5").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck6").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck7").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck8").classList.remove("currentlySelectedDuck");

}

var changeMallard = function() {
    document.getElementById("typesOfDuckPic").src = "images/mallard.png";
    document.getElementById("typesOfDuckPic2").src = "images/mallard2.png";
    document.getElementById("duckName").innerHTML = "Mallard";
    document.getElementById("duckOrder").innerHTML = "Anseriformes";
    document.getElementById("duckFamily").innerHTML = "Anatidae";
    document.getElementById("duckDescription").innerHTML = "If someone at a park is feeding bread to ducks, chances are there are Mallards in the fray. Perhaps the most familiar of all ducks, Mallards occur throughout North America and Eurasia in ponds and parks as well as wilder wetlands and estuaries. The male’s gleaming green head, gray flanks, and black tail-curl arguably make it the most easily identified duck. Mallards have long been hunted for the table, and almost all domestic ducks come from this species.";
    document.getElementById("typesofDuckHabitat").src = "images/mallardHabitat.png";
    document.getElementById("duckHabitat").innerHTML = "Look for Mallards at local city or suburban parks, where they’re likely to be accepting food handouts from humans. If you want to see them in a more natural setting, visit a nearby pond or lake—Mallards are likely to be the ducks you most frequently see.";
    document.getElementById("duckFact1").innerHTML = "The Mallard is the ancestor of nearly all domestic duck breeds (everything except the Muscovy Duck). Domestic ducks can be common in city ponds and can be confusing to identify—they may lack the white neck ring, show white on the chest, be all dark, or show oddly shaped crests on the head.";
    document.getElementById("duckFact2").innerHTML = "Ducks are strong fliers; migrating flocks of Mallards have been estimated traveling at 55 miles per hour.";
    document.getElementById("changeDuck1").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck2").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck3").classList.add("currentlySelectedDuck");
    document.getElementById("changeDuck4").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck5").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck6").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck7").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck8").classList.remove("currentlySelectedDuck"); 
}

var changeWoodDuck = function() {
    document.getElementById("typesOfDuckPic").src = "images/woodDuck.png";
    document.getElementById("typesOfDuckPic2").src = "images/woodDuck2.png";
    document.getElementById("duckName").innerHTML = "Wood Duck";
    document.getElementById("duckOrder").innerHTML = "Anseriformes";
    document.getElementById("duckFamily").innerHTML = "Anatidae";
    document.getElementById("duckDescription").innerHTML = "The Wood Duck is one of the most stunningly pretty of all waterfowl. Males are iridescent chestnut and green, with ornate patterns on nearly every feather; the elegant females have a distinctive profile and delicate white pattern around the eye. These birds live in wooded swamps, where they nest in holes in trees or in nest boxes put up around lake margins. They are one of the few duck species equipped with strong claws that can grip bark and perch on branches.";
    document.getElementById("typesofDuckHabitat").src = "images/woodDuckHabitat.png";
    document.getElementById("duckHabitat").innerHTML = "Look for Wood Ducks around the edges of swamps, sluggish streams, overgrown beaver ponds, and wood-fringed marshes. They're less likely to be out on a large stretch of open water. They pick their way around vegetation growing out of the water or stand on tree branches or logs along the shorelines. Look for their distinctive oblong head shape. In flight they have a distinctive pattern: dark underwings and chest with a contrasting bright belly.";
    document.getElementById("duckFact1").innerHTML = "Natural cavities for nesting are scarce, and the Wood Duck readily uses nest boxes provided for it. If nest boxes are placed too close together, many females lay eggs in the nests of other females.";
    document.getElementById("duckFact2").innerHTML = "The Wood Duck nests in trees near water, sometimes directly over water, but other times over a mile away. After hatching, the ducklings jump down from the nest tree and make their way to water. The mother calls them to her, but does not help them in any way. The ducklings may jump from heights of over 50 feet without injury.";
    document.getElementById("changeDuck1").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck2").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck3").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck4").classList.add("currentlySelectedDuck");
    document.getElementById("changeDuck5").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck6").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck7").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck8").classList.remove("currentlySelectedDuck"); 
}

var changeFulvousWhistlingDuck = function() {
    document.getElementById("typesOfDuckPic").src = "images/fulvousWhistlingDuck.png";
    document.getElementById("typesOfDuckPic2").src = "images/fulvousWhistlingDuck2.png";
    document.getElementById("duckName").innerHTML = "Fulvous Whistling-Duck";
    document.getElementById("duckOrder").innerHTML = "Anseriformes";
    document.getElementById("duckFamily").innerHTML = "Anatidae";
    document.getElementById("duckDescription").innerHTML = 'Whistling-ducks are a distinctive group of about 8 species of brightly colored, oddly proportioned waterfowl. The Fulvous Whistling-Duck is a mix of rich caramel-brown and black, a long-legged and long-necked creature found in warm freshwater marshes across the Americas, Africa, and Asia. In the United States they are rarely found far from rice fields, which provide both food and an optimal water depth for these gangly birds to forage in. They often roost in trees and were once known as “tree ducks.”';
    document.getElementById("typesofDuckHabitat").src = "images/fulvousWhistlingDuckHabitat.png";
    document.getElementById("duckHabitat").innerHTML = "In the United States, look for Fulvous Whistling-Ducks in and around rice fields in central Florida (year-round) or coastal Texas and Louisiana (spring through fall). In addition to rice fields, they may occur at crayfish farms and flooded pastures. They may flock with more numerous Black-bellied Whistling-Ducks, which have a gray head and bright pink bill, not a dark bill. Scan for these long-necked birds looking up out of marsh vegetation or watch at dusk and dawn for flocks flying between roosts and foraging areas.";
    document.getElementById("duckFact1").innerHTML = "In some ways, whistling-ducks act more like swans than ducks. The male helps take care of the offspring and mated pairs stay bonded for many years.";
    document.getElementById("duckFact2").innerHTML = "Pesticides applied to rice in the 1960s caused declines in Texas and Louisiana populations. Numbers have recovered and stabilized since then.";
    document.getElementById("changeDuck1").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck2").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck3").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck4").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck5").classList.add("currentlySelectedDuck");
    document.getElementById("changeDuck6").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck7").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck8").classList.remove("currentlySelectedDuck"); 
}

var changeBuffleHead = function() {
    document.getElementById("typesOfDuckPic").src = "images/buffleheadDuck.png";
    document.getElementById("typesOfDuckPic2").src = "images/buffleheadDuck2.png";
    document.getElementById("duckName").innerHTML = "Bufflehead";
    document.getElementById("duckOrder").innerHTML = "Anseriformes";
    document.getElementById("duckFamily").innerHTML = "Anatidae";
    document.getElementById("duckDescription").innerHTML = "A buoyant, large-headed duck that abruptly vanishes and resurfaces as it feeds, the tiny Bufflehead spends winters bobbing in bays, estuaries, reservoirs, and lakes. Males are striking black-and white from a distance. A closer look at the head shows glossy green and purple setting off the striking white patch. Females are a subdued gray-brown with a neat white patch on the cheek. Bufflehead nest in old woodpecker holes, particularly those made by Northern Flickers, in the forests of northern North America.";
    document.getElementById("typesofDuckHabitat").src = "images/buffleheadDuckHabitat.png";
    document.getElementById("duckHabitat").innerHTML = "During the winter, look for these tiny, black-and-white ducks in sheltered coves along the Atlantic or Pacific coast, or on inland ponds in southern North America. While foraging they spend half their time underwater, so scan carefully and patiently. In the summer you can visit their breeding grounds near lakes in the boreal forest and aspen parklands of central Canada.";
    document.getElementById("duckFact1").innerHTML = "The Bufflehead nests almost exclusively in holes excavated by Northern Flickers and, on occasion, by Pileated Woodpeckers.";
    document.getElementById("duckFact2").innerHTML = "Unlike most ducks, the Bufflehead is mostly monogamous, often remaining with the same mate for several years.";
    document.getElementById("changeDuck1").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck2").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck3").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck4").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck5").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck6").classList.add("currentlySelectedDuck");
    document.getElementById("changeDuck7").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck8").classList.remove("currentlySelectedDuck"); 
}

var changeRuddyDuck = function() {
    document.getElementById("typesOfDuckPic").src = "images/ruddyDucky.png";
    document.getElementById("typesOfDuckPic2").src = "images/ruddyDucky2.png";
    document.getElementById("duckName").innerHTML = "Ruddy Duck";
    document.getElementById("duckOrder").innerHTML = "Anseriformes";
    document.getElementById("duckFamily").innerHTML = "Anatidae";
    document.getElementById("duckDescription").innerHTML = "Ruddy Ducks are compact, thick-necked waterfowl with seemingly oversized tails that they habitually hold upright. Breeding males are almost cartoonishly bold, with a sky-blue bill, shining white cheek patch, and gleaming chestnut body. They court females by beating their bill against their neck hard enough to create a swirl of bubbles in the water. This widespread duck breeds mostly in the prairie pothole region of North America and winters in wetlands throughout the U.S. and Mexico.";
    document.getElementById("typesofDuckHabitat").src = "images/ruddyDuckHabitat.png";
    document.getElementById("duckHabitat").innerHTML = "Look for Ruddy Ducks from fall through spring on open water, both inland and in protected coastal areas such as harbors and small bays. During the day, they often sleep with their heads tucked, and they gather in tight flocks. Because of this, these little divers often look like gray-brown or chestnut blobs with a long, rounded tail (for a duck, anyway) held up at an angle. In summer, look for them swimming and diving in wetlands of the prairie pothole region and the interior West. The male’s white cheek patch is often distinctive from great distances.";
    document.getElementById("duckFact1").innerHTML = "Ruddy Ducks lay big, white, pebbly-textured eggs—the largest of all duck eggs relative to body size. Energetically expensive to produce, the eggs hatch into well-developed ducklings that require only a short period of care.";
    document.getElementById("duckFact2").innerHTML = "Ruddy Ducks are very aggressive toward each other and toward other species, especially during the breeding season. They are even known to chase rabbits feeding on the shore.";
    document.getElementById("changeDuck1").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck2").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck3").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck4").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck5").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck6").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck7").classList.add("currentlySelectedDuck");
    document.getElementById("changeDuck8").classList.remove("currentlySelectedDuck"); 
}

var changeRedhead = function() {
    document.getElementById("typesOfDuckPic").src = "images/redheadDuck.png";
    document.getElementById("typesOfDuckPic2").src = "images/redheadDuck2.png";
    document.getElementById("duckName").innerHTML = "Redhead";
    document.getElementById("duckOrder").innerHTML = "Anseriformes";
    document.getElementById("duckFamily").innerHTML = "Anatidae";
    document.getElementById("duckDescription").innerHTML = "With a gleaming cinnamon head setting off a body marked in black and business gray, adult male Redheads light up the open water of lakes and coastlines. These sociable ducks molt, migrate, and winter in sometimes-huge flocks, particularly along the Gulf Coast, where winter numbers can reach the thousands. Summers find them nesting in reedy ponds of the Great Plains and West. Female and young Redheads are uniform brown, with the same black-tipped, blue-gray bill as the male.";
    document.getElementById("typesofDuckHabitat").src = "images/redheadDuckHabitat.png";
    document.getElementById("duckHabitat").innerHTML = "In summer, your best bet for finding Redheads is to head to the pond-studded “prairie pothole” grasslands of the Great Plains. Much of the rest of the U.S. gets their chance to find them during migration and winter. Migrating Redheads stop over on medium to large reservoirs and lakes. In winter look for them often in shallow waters of the Gulf Coast as well as in the Great Lakes.";
    document.getElementById("duckFact1").innerHTML = "Many ducks lay some of their eggs in other birds’ nests (a strategy known as “brood parasitism”), but female Redheads are perhaps tops in this department. Their targets include other Redheads as well as Mallard, Canvasback, Northern Pintail, Gadwall, Northern Shoveler, Ruddy Duck, American Wigeon—even Northern Harrier.";
    document.getElementById("duckFact2").innerHTML = "Redheads are so exceptionally gregarious they’re referred to as “rafting ducks.” Sometimes they alight at hunting decoys before the hunters have finished setting them up.";
    document.getElementById("changeDuck1").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck2").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck3").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck4").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck5").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck6").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck7").classList.remove("currentlySelectedDuck");
    document.getElementById("changeDuck8").classList.add("currentlySelectedDuck");  
}

window.onload= function() {
    document.getElementById("changeDuck1").classList.add("currentlySelectedDuck");
    document.getElementById("changeDuck1").onclick = changeAmericanBlackDuck;
    document.getElementById("changeDuck2").onclick = changeAmericanCoot;
    document.getElementById("changeDuck3").onclick = changeMallard;
    document.getElementById("changeDuck4").onclick = changeWoodDuck;
    document.getElementById("changeDuck5").onclick = changeFulvousWhistlingDuck;
    document.getElementById("changeDuck6").onclick = changeBuffleHead;
    document.getElementById("changeDuck7").onclick = changeRuddyDuck;
    document.getElementById("changeDuck8").onclick = changeRedhead;
}