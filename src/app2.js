import './app2.css'
import $ from 'jquery'

const $navBar = $('#app2 .navBar')
const $contentBar = $('#app2 .contentBar')

$navBar.on('click','li',(e)=>{
  const $li = $(e.currentTarget);
  $li
    .addClass('selected')
    .siblings()
    .removeClass('selected')
  const index = $li.index()
  console.log(index)
  $contentBar
    .children()
    .eq(index)
    .addClass('active')
    .siblings()
    .removeClass('active')
});

$navBar.children().eq(0).trigger('click')