<?php

include_once('XmlToJson.php');

class TrafficApi
{
    private $base_url = 'http://api.sr.se/api/v2/traffic';
    private $xmlToJson;

    public function __construct()
    {
        $this->xmlToJson = new XmlToJson();
    }

    /**
     * Get the latest $max_count messages from SR
     * @param  integer $max_count
     * @return string JSON
     */
    public function getLastMessages($max_count = 100)
    {
        $res = file_get_contents($this->base_url . '/messages');
        return $this->xmlToJson->parse($res);
    }
}
