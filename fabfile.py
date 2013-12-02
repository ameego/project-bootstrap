from __future__ import with_statement
 
import fabric
import os
from fabric.api import *
from fabric.colors import green, yellow, red
from ftplib import FTP
from git import *
 
###############################################################################
# SECTION: Constants
###############################################################################
DATABASE = {
   "local": {
      "userName": "user",
      "password": "password"
   }
}
 
FTP_ADDRESS = "ftp://siiilk@178.170.127.10:2122"
FTP_USER = "siiilk"
FTP_PASSWORD = "hzudyy60tm"
FTP_ROOT_DIR = "/httpdocs/test/"
 
REPO_ROOT = "https://robin_pick@bitbucket.org/robin_pick/siiilk.git"
 
 
###############################################################################
# SECTION: Private methods
###############################################################################
def _connectToFTP():
   print green("** Connecting to the server **")
 
   ftp = FTP(host=FTP_ADDRESS, user=FTP_USER, passwd=FTP_PASSWORD)
   return ftp
 
def _gitLatestFiles():
   print green("** Connecting to Git **")
 
   g = Git(REPO_ROOT)
   repo = Repo(REPO_ROOT)
   headCommit = repo.head.commit
 
   print "Head commit revision: %s" % headCommit
   print "Message: %s" % headCommit.message
 
   result = g.execute(["git", "diff-tree", "--no-commit-id", "--name-only", "-r", str(headCommit)])
   files = result.split("\n")
 
   return _filterForValidFiles(fileList=files)
 
def _filterForValidFiles(fileList):
   return [f for f in fileList if f.startswith(("components/", "www/"))]
 
 
###############################################################################
# SECTION: Actions
###############################################################################
 
def uploadLatest():
   print ""
   print green("** Upload latest changes **")
 
   ftp = _connectToFTP()
   files = _gitLatestFiles()
 
   for f in files:
      print yellow("Uploading file %s" % f)
      split = os.path.split(f)
 
      ftp.cwd(os.path.join(FTP_ROOT_DIR, split[0]))
      ftp.storlines("STOR %s" % split[1], open(os.path.join("../", f), "r"))
 
   ftp.quit()