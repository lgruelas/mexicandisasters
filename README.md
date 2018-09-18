[![Build Status](https://travis-ci.org/lgruelas/mexicandisasters.svg?branch=master)](https://travis-ci.org/lgruelas/mexicandisasters)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/lgruelas/mexicandisasters/blob/master/LICENSE)

<img align="left" width="36" height="36" src="assets/imgs/android-icon-36x36.png">



# Mexican disasters visor

Source code of the consultant software (not yet) implemented in agro.mx to consult the last 1000 years of mexican disasters.

### This page

This is the gh-pages branch, the current work is in master branch, here you will only see a bootstrap template to wait. You can get it from here:
https://startbootstrap.com/template-overviews/coming-soon/

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Specific for fedora but is pretty easy to follow along in any distribution.

### Prerequisites

Linux
Python 2.7
Flask microframework
PyMysql
MariaDB

Python and dependencies:
```
sudo dnf -y install python
sudo dnf -y install pip
pip istall --user flask
pip install --user pymysql
```

MariaDB
```
sudo dnf -y install mariadb
sudo dnf -y install mariadb-server
systemctl start mariadb
mysql_secure_installation
```

### Installing


## Built With

* [Python](https://www.python.org/downloads/release/python-2714/)
* [Flask](http://flask.pocoo.org/docs/0.12/) - Web Framework
* [MariaDB](https://downloads.mariadb.org/mariadb/10.2.14/) - DBMS


## Versioning

We use [SemVer](http://semver.org/) for versioning. 

## Authors

* **Erick de la Barrera** - *Lab Leader, Product Owner* - [LabPage](http://agro.mx/delabarrera/)
* **Germán Ruelas** - *Lab Member* - [GitHub](https://github.com/lgruelas)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the GPL 3 License - see the [LICENSE.md](LICENSE.md) file for details

## Project Status

Starting

## Acknowledgments
