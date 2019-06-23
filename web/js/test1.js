/*
打印九九乘法表
*/
document.write("<table align=center>");
for (var i = 1; i <= 9; i++) {
    document.write("<tr>");
    for (var j = 1; j <= i; j++) {
        document.write("<td>");
        document.write(j + " * " + i + " = " + i * j + "&nbsp;&nbsp;&nbsp;");
        document.write("</td>");
    }
    // document.write("<br>");
    document.write("</tr>");
}
document.write("</table>");
