function App()
{
    function PrintName()
    {
        document.getElementById("heading").innerHTML = "Hello " + document.getElementById("name").value;
    }
    document.getElementById("print").onclick = PrintName;

    function ShowMessage()
    {
        alert("Hello");
    }
    document.getElementById("show").onclick = ShowMessage;
}
window.onload = App;