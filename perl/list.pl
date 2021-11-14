#!D:\Program_Files\Perl\perl\bin\perl.exe
print "Content-type: text/html\n\n";
use strict;
use DBI;
use HTML::Template;

use CGI;
use CGI::Carp qw (fatalsToBrowser);

my $user = "newuser";

my $password = "password"; 
  
# connect to MySQL database
my $dbh = DBI->connect ("DBI:mysql:blog_0",
                        $user,
                        $password) 
                        or die "Can't connect to database: $DBI::errstr\n";


my $template = HTML::Template->new(filename => 'article_list.tpl');

my $sth =$dbh->prepare( "SELECT * from article");
$sth->execute() or die "$DBI::errstr";

my @rows;
while (my @data_row = $sth->fetchrow_array) {
        my %row;
        $row{ID} = $data_row[0];
        $row{TITLE} = $data_row[1];
        $row{SUMMARY} = $data_row[2];
        $row{DATE} = $data_row[3];
        push @rows, \%row;
}
$template->param(ROWS=>\@rows);
print "Content-Type: text/html\n\n", $template->output;