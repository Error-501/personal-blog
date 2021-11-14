#!D:\Program_Files\Perl\perl\bin\perl.exe
print "Content-type: text/html\n\n";
use DBI;
use CGI;
use CGI::Carp qw (fatalsToBrowser);

$user = "newuser";

$password = "password"; 
  
# connect to MySQL database
my $dbh = DBI->connect ("DBI:mysql:blog_0",
                        $user,
                        $password) 
                        or die "Can't connect to database: $DBI::errstr\n";
  
print "connected to the database\n";



$q = CGI->new;
$query=CGI->new;
$title=$query->param('title');
$summary=$query->param('summary');
$content=$query->param('content');
my $id=0;

my $stmt =$dbh->prepare( "SELECT max(id) from article");
$stmt->execute() or die "$DBI::errstr";
while(my @row = $stmt->fetchrow_array()){
   $id = $row[0]+1;
}       
$stmt->finish();

print $id;

my $sth = $dbh->prepare("INSERT INTO article
                        VALUES(?,?, ?, ?, ?)");

my $datetime = now();

$rv = $sth->execute($id, $title, $summary,$datetime, $content);

if ($rv==1){
    print "Record has been successfully updated !!!n";
}
else{
    print "Error!!while inserting recordn";
exit;
}
