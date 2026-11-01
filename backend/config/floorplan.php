<?php

/*
| Booth catalogue for the Emperors Palace floor plan (booths 1–38).
| Must match frontend/src/components/floorplan/booths.js. The API uses this to set the
| booth title, size and price on every booking, so prices never come from the browser.
*/

$types = [
    'official' => ['label' => 'Official Sponsorship Booth', 'size' => '5 x 3', 'price' => 2500],
    'title' => ['label' => 'Title Sponsorship Booth', 'size' => '5 x 3', 'price' => 3500],
    'exclusive' => ['label' => 'Exclusive Sponsorship Booth', 'size' => '5 x 3', 'price' => 2500],
    'regional' => ['label' => 'Regional Sponsorship Booth', 'size' => '5 x 3', 'price' => 3000],
    'diamond' => ['label' => 'Diamond Booth', 'size' => '4 x 3', 'price' => 1750],
    'elite' => ['label' => 'Elite Booth', 'size' => '4 x 3', 'price' => 2000],
    'gold' => ['label' => 'Gold Booth', 'size' => '3 x 3', 'price' => 1000],
    'silver' => ['label' => 'Silver Booth', 'size' => '3 x 3', 'price' => 600],
];

// Booth number => type
$layout = [1 => 'official', 2 => 'title', 3 => 'exclusive', 4 => 'regional'];
$stands = ['diamond', 'diamond', 'elite', 'elite', 'diamond', 'diamond'];
foreach ($stands as $i => $type) {
    $layout[5 + $i] = $type;   // left column 05–10
    $layout[11 + $i] = $type;  // right column 11–16
}
$row = ['gold', 'silver', 'silver', 'silver', 'silver', 'silver', 'gold'];
foreach ($row as $i => $type) {
    $layout[23 - $i] = $type;  // top row 17–23
    $layout[32 + $i] = $type;  // bottom row 32–38
}
$side = ['gold', 'silver', 'silver', 'gold'];
for ($i = 0; $i < 8; $i++) {
    $layout[24 + $i] = $side[$i % 4];  // speaker-hall side 24–31
}
ksort($layout);

$booths = [];
foreach ($layout as $no => $type) {
    $booths[$no] = ['type' => $type] + $types[$type];
}

return [
    'currency' => 'USD',
    'booths' => $booths,
    'payment_types' => ['now', 'stripe', 'upi', 'usdt', 'bank'],
];
