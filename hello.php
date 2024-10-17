<?php
// Allow cross-origin requests (CORS)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// File to store the RSS feed data
$jsonFilePath = "rss_data.json";

// URL of the RSS feed you want to fetch
$rssFeedUrl = "https://kinowave.wordpress.com/rss/"; // Replace with actual RSS feed URL

// Check if the JSON file exists and is recent (e.g., within the last hour)
if (file_exists($jsonFilePath) && (time() - filemtime($jsonFilePath)) < 3600) {
    // If the file is recent, load the data from the file
    $rssData = file_get_contents($jsonFilePath);
    echo $rssData;
    exit;
}

// Load and parse the RSS feed
$rssContent = simplexml_load_file($rssFeedUrl, null, LIBXML_NOCDATA);

// Check if the feed was successfully fetched
if ($rssContent === false) {
    echo json_encode(["error" => "Failed to fetch RSS feed"]);
    exit;
}

// Extract relevant data from the RSS feed
$rssDataArray = [];
$imageUrls = []; // Initialize an array to hold images of all items

// Define the namespace for media (for 'media:content')
$namespaces = $rssContent->getNamespaces(true);

foreach ($rssContent->channel->item as $index => $item) {
    // Initialize an array to hold the images of the current item
    $currentItemImages = [];

    // Check if 'media:content' is available for this specific item and retrieve it
    if (isset($namespaces['media'])) {
        $mediaContent = $item->children($namespaces['media']);

        // Loop through each media:content element
        foreach ($mediaContent as $media) {
            if (isset($media->attributes()->url)) {
                // Store each media:content URL in the current item's image array
                $currentItemImages[] = (string) $media->attributes()->url;
            }
        }
    }

    // Store the current item's images in the imageUrls array at the corresponding index
    $imageUrls[$index] = $currentItemImages;

    // Add the extracted data including the images for this item to the result array
    $rssDataArray[] = [
        "title" => (string) $item->title,
        "link" => (string) $item->link,
        "description" => (string) strip_tags($item->description), // Removing HTML tags for a cleaner description
        "pubDate" => (string) $item->pubDate,
        "image" => $imageUrls[$index] // Add the current item's images to the response
    ];
}

// Convert the extracted data to JSON format
$rssDataJson = json_encode($rssDataArray);

// Save the JSON data to the file
file_put_contents($jsonFilePath, $rssDataJson);

// Send the extracted data back to the React frontend
echo $rssDataJson;
?>


