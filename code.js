$(document).ready(function()
{
    $("form").submit(generateGreeting);
    $("#qtyLearning").change(updatePrice);
    $("#qtyDonation").change(updatePrice);

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

    function updatePrice()
    {
        let qtyLearn = parseFloat($("#qtyLearning").val());
        let qtyDonate = parseFloat($("#qtyDonation").val());
        let output = 0;

        if (isNaN(qtyLearn))
        {
            $("#totalDonation").text(`$${qtyDonate.toFixed(2) * 14.99}`);
            output = qtyDonate + qtyLearn;
            $("#gTotal").text(`$${output.toFixed(2)}`);
        }
        else if (isNaN(qtyDonate))
        {
            $("#totalLearning").text(`$${qtyLearn.toFixed(2) * 39.99}`);
            output = qtyDonate + qtyLearn;
            $("#gTotal").text(`$${output.toFixed(2)}`);
        }
        else
        {
            $("#totalLearning").text(`$${qtyLearn.toFixed(2) * 39.99}`);
            $("#totalDonation").text(`$${qtyDonate.toFixed(2) * 14.99}`);
            output = (qtyLearn * 39.99) + (qtyDonate * 14.99);
            $("#gTotal").text(`$${output.toFixed(2)}`);
        }
    }
});