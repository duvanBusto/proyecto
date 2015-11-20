<?php

/**
 * @file
 * modulo para administracion de usuarios especiales cabezas de red
 * @author Jair Hernandez Dodino, Duvan Bustos
 * Monetisoft
*/

function commerce_visacheckout_prueba_algo(){
  $content = array(
    '#prefix' => '<div class="alert-success wrapper-page-time">',
    '#suffix' => '</div>',
    '#markup' => 'hola, funciona la prueba desde inc',
  );
  return $content;
}
