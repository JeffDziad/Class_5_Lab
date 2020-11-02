$(document).ready(function()
{
    $("form").submit(generateGreeting);

    function generateGreeting(event)
    {
        event.preventDefault();

        let rank = $("input[name=rank]:checked");

        let rankString = rank.data("rank");

        let firstName = $("#first_Name").val();

        let lastName = $("#last_Name").val();

        $(".output").text(`Hello, ${rankString} ${firstName} ${lastName}`);
        if (rankString === "Pvt.")
        {
            $(".output").css("color", "dodgerblue");
        }
        else if (rankString == "Sgt.")
        {
            $(".output").css("color", "darkgreen");
        }
        else
        {
            $(".output").css("color", "red");
        }
        $(".output").show();
    }
});