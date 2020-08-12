<script type='text/javascript'>
//<![CDATA[
//Script Redirect CTRL + U
//https://mungkur.com/ ganti dengan url blog kalian
function redirectCU(e) {
  if (e.ctrlKey && e.which == 85) {
    window.location.replace("https://mungkur.com/");
    return false;
  }
}
document.onkeydown = redirectCU;

//Script Redirect Klik Kanan
function redirectKK(e) {
  if (e.which == 3) {
    window.location.replace("https://mungkur.com/");
    return false;
  }
}
document.oncontextmenu = redirectKK;
//]]>
</script>
