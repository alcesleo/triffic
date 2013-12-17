<?php

// http://lostechies.com/seanbiefeld/2011/10/21/simple-xml-to-json-with-php/
class XmlToJson
{
    public function parse($str)
    {
        $str = str_replace(array("\n", "\r", "\t"), '', $str);
        $str = trim(str_replace('"', "'", $str));
        $simpleXml = simplexml_load_string($str);
        $json = json_encode($simpleXml);

        return $json;
    }
}
