<?php

require_once('config.php');

// query string
$q = isset($_GET['q']) ? $_GET['q'] : die("param given is null");

// sql statement - get locations
$sql = "SELECT
            c.name as name_com,
            c.lat,
            c.lng,
            p.name as name_prov,
            p.abbr as abbr_prov,
            r.name as name_reg
        FROM 
            comuni c, provincie p, regioni r
        WHERE
            (c.codice_provincia_istat = p.ID AND p.codice_regione_istat = r.codice_regione_istat)
            AND c.name LIKE \"$q%\" LIMIT 10";

if ($result = $db->query($sql)) {
    $loc_arr = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($loc_arr);
}
