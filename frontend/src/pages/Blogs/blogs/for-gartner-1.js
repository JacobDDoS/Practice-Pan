import { Content } from "../../../data/Classes/Question/Content";
import { Piece } from "../../../data/Classes/Question/Piece";

const pieceBuilder = (type, contentOfPiece) => {
    return new Piece(type, contentOfPiece);
}

const content = new Content([
    pieceBuilder("h1", "Hello Ms. Gartner!"),
    pieceBuilder("br", ""),
    pieceBuilder("h2", `Welcome to my Practice Project!`),
    pieceBuilder("p", `This website is intended to be a website where anyone can practice anything, including math.
    But I figured that it could also serve as a kind of blog where one can post information in a format similar to that of the main practice part of this website
    `),
    pieceBuilder("br", ""),
    pieceBuilder("p", `This project is incredibly new so a lot is bound to change (if you have any suggestions, I would love to hear it!)`),
    pieceBuilder("h2", "Foreword"),
    pieceBuilder("p", "Yes I built this website. You can see the source code here: "),
    pieceBuilder("a", "https://github.com/JacobDDoS/Practice-Pan"),
    pieceBuilder("p", `As for the formatting of this blog and future ones, I will try to have multiple categories of math such as linear algebra, set theory, and number theory.
                       I will also try to include some practice questions so you can try it yourself. I'm unsure of how long these blogs will be but they will likely vary quite 
                       a bit as I do different amounts of studying pertaining to math each week. There may not even be a blog entry for any given week for whatever reason. 
                       At some point in the future, this website will give the user capability to build their own blog or question set, so when that time comes I'd love for you 
                       to try it out!
    `),
    pieceBuilder("br", ""),
    pieceBuilder("p", "Anyways, let's get started!"),
    pieceBuilder("br", ""),
    pieceBuilder("h1", "Number Theory"),
    pieceBuilder("h3", "Link to the book I'm reading: "),
    pieceBuilder("a", "https://joshua.smcvt.edu/numbertheory/book.pdf"),
    pieceBuilder("p", "For this week, we're going to talk about Divisibility, Greatest Common Divisor (GCD), and Bezout's Lemma"),
    pieceBuilder("h2", "Divisibility"),
    pieceBuilder("p", "Firstly let's define what it means for a number to be divisible by another number: "),
    pieceBuilder("InlineMath", "d"),
    pieceBuilder("p", " divides "),
    pieceBuilder("InlineMath", "n"),
    pieceBuilder('p', " if there is some "),
    pieceBuilder('InlineMath', "k"),
    pieceBuilder("p", " such that "),
    pieceBuilder('InlineMath', "kd = n"),
    pieceBuilder('br', ''),
    pieceBuilder("p", "To say that d divides n, we use the | symbol: "),
    pieceBuilder("InlineMath", "d | n"),
    pieceBuilder("br",""),
    pieceBuilder("p", "Listed below are properties of divisibility (for all numbers n, m, & d): "),
    pieceBuilder("Math", String.raw`
        \displaylines{
            (1) \ d|0 \\
            (2) \ 0|n \ \rightarrow \ n=0 \\ 
            (3) \ 1|n \\ 
            (4) \ n|n \\ 
            (5) \ n|1 \ \rightarrow n\in \{0, 1\} \\ 
            (6) \ d|n \ \ and \ \ n|m \ \rightarrow \ d|m \\ 
            (7) \ d|n \ \rightarrow \ ad|an \\ 
            (8) \ ad|dn \ \ and \ \ a \ne 0 \ \rightarrow \ d|n \\ 
            (9) \ d|n \ \ and \ \ d|m \ \rightarrow \ d|an+bm \ \ a,b \ \in \mathbb{Z} \\ 
            (10) \ d,n \ > \ 0 \ \ and \ \ d | n \ \rightarrow \ d \le n \\ 
        }
    `),
    pieceBuilder("h3", "1.3 definition"), 
    pieceBuilder("p", "- n is even if it's divisible by 2, or odd otherwise"),
    pieceBuilder("h3", "1.4 Lemma"),
    pieceBuilder("p", "(1) If d|a, then -d|a and d|-a"),
    pieceBuilder("p", "(2) If d|a, then "), pieceBuilder("InlineMath", `d \\ | \\ |a| `), pieceBuilder("p", " (d divides absolute value of a)"),
    pieceBuilder("br", ""),
    pieceBuilder("p", "(3) The largest integer that divides a is "), pieceBuilder("InlineMath", "|a|"),

    pieceBuilder("h3", "3.1 Theorem"),
    pieceBuilder("p", "Given: a,b > 0 and a,b,q,r are integers"),
    pieceBuilder("p", "a = bq+r "), pieceBuilder("InlineMath", "\\ \\ 0 \\le r \\le b"),
    pieceBuilder("br", ""),
    pieceBuilder("p", "The integer pair q, r is unique, there is no other solution"),


    pieceBuilder("h2", "Greatest Common Divisor"),
    pieceBuilder("h3", "4.1 Definition"),
    pieceBuilder("p", "An integer is a common divisor of two others if it divides both of them"),
    pieceBuilder('p', 'C(a, b) = set of all common divisors'),
    pieceBuilder('h3', "4.2 Definition"),
    pieceBuilder('p', "The greatest common divisor (gcd) is the largest of C(a, b)"),
    pieceBuilder("h3", "4.5 Lemma"),
    pieceBuilder("Math", "gcd(a, b) \\ = \\ gcd(|a|, |b|)"),
    pieceBuilder('h3', '4.9 Definition'),
    pieceBuilder('p', 'Two numbers are relatively prime if they have a greatest common divisor of 1'),
    pieceBuilder('h3', '4.10 Lemma'),
    pieceBuilder('p', "If "), pieceBuilder("InlineMath", "g = gcd(a, b)"), pieceBuilder('p', ", then "), pieceBuilder("InlineMath", "gcd(\\frac{a}{g}, \\frac{b}{g}) = 1"),

    pieceBuilder("h2", "Bezout's Lemma"),
    pieceBuilder("h3", "5.1 Definition"),
    pieceBuilder('p', 'A number c is a linear combination of a & b if:'),
    pieceBuilder("Math", "c = as + bt"),
    pieceBuilder('p', "For some s & t"),
    pieceBuilder('h3', "5.3 Lemma (Bezout's Lemma)"),
    pieceBuilder('p', 'The gcd of two numbers is a linear combination of the two'),
    pieceBuilder("Math", "gcd(a, b) = sa + tb \\ \\ \\forall(a, b) \\exists(s, t)"),
    pieceBuilder('p', "Example: "),
    pieceBuilder("Math", "gcd(10 ,15) = 5 = (-1)10 + (1)15 = 5"),
    pieceBuilder('p', 'I actually created a c++ program which can take in any two integers and return the linear combination of the two that results in their gcd:'),
    pieceBuilder("Code", {"code": `
#include <boost/multiprecision/cpp_int.hpp>
#include <boost/multiprecision/cpp_dec_float.hpp>
#include <bits/stdc++.h>
namespace mp = boost::multiprecision;
using namespace std;

typedef mp::cpp_dec_float_50 float50;
using mp::cpp_int;

//Example Input
/*

803 154

*/

void LinearCombinationsToGetGCD(cpp_int a, cpp_int b) {
    if (a < 0) {
        a *= -1;
    }
    if (b < 0) {
        b *= -1;
    }
    cpp_int copyA = a;
    cpp_int copyB = b;
    map<cpp_int, pair<cpp_int, cpp_int>> linearCombinationToGetNumber;
    linearCombinationToGetNumber[a] = make_pair(1, 0);
    linearCombinationToGetNumber[b] = make_pair(0, 1);

    if (b > a) {
        swap(b, a);
    }
    while (b != 0) {
        cpp_int quotient = a / b;
        cpp_int remainder = a % b;

        pair<cpp_int, cpp_int> linearCombinationToCreateNum = linearCombinationToGetNumber[a];
        pair<cpp_int, cpp_int> linearCombinationToCreateB = linearCombinationToGetNumber[b];
        linearCombinationToCreateNum.first -= linearCombinationToCreateB.first * quotient;
        linearCombinationToCreateNum.second -= linearCombinationToCreateB.second * quotient;

        linearCombinationToGetNumber[remainder] = linearCombinationToCreateNum;

        swap(a, b);
        b %= a;

    }

    pair<cpp_int, cpp_int> linearCombinationAnswer = linearCombinationToGetNumber[a];

    cout << "Greatest Common Divisor: " << a << endl;
    cout << linearCombinationAnswer.first << " " << linearCombinationAnswer.second << endl;
    cout << linearCombinationAnswer.first << " * " << copyA << " + " << linearCombinationAnswer.second << " * " << copyB << " = " << a << endl;
}


int main() {
    cpp_int a, b;
    cin >> a >> b;
    LinearCombinationsToGetGCD(a, b);
}

    `, "language": "cpp"}),

    pieceBuilder("br", ""),
    pieceBuilder("br", ""),
    pieceBuilder("br", ""),
    pieceBuilder("br", ""),
    pieceBuilder("br", ""),
    pieceBuilder("h3", "Expressing Linear combinations:"),
    pieceBuilder("InlineMath", "\\mathcal{L}(a,b)"), pieceBuilder("p", " means all linear combinations of a & b"),
    pieceBuilder("br", ""),
    pieceBuilder("InlineMath", "\\mathcal{L}^{+}(a,b)"), pieceBuilder('p', ' means all positive linear combinations of a & b'),

    pieceBuilder('h3', '5.5 Corollary'),
    pieceBuilder("InlineMath", "\\mathcal{L}(a,b) = "), pieceBuilder('p', " multiples of gcd(a, b)"),

    pieceBuilder('h3', '5.6 Lemma'),
    pieceBuilder('p', "If a | bc and a is relatively prime to b, then a | c"),

    pieceBuilder('h3', '5.7 Lemma'),
    pieceBuilder("InlineMath", "a,b \\in \\mathbb{Z}"), pieceBuilder('p', ', if gcd(a, b) | c, then the equation sa + tb = c has infinitely many solution pairs'),
    pieceBuilder('p', 'The two equations listed below are equivalent:'),
    pieceBuilder('Math', `\\displaylines{
        sa + tb = c \\\\
        a(s-nb) + b(t+na) = 0, n \\in \\mathbb{Z}
    }`)

])

export default content;