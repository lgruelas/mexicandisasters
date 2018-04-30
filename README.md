# Mexican disasters visor

Source code of the consultant software (not yet) implemented in agro.mx to consult the last 1000 years of mexican disasters.

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

* **Erick de la Barrera** - *Lab Leader* - [LabPage](http://agro.mx/delabarrera/)
* **Germán Ruelas** - *Lab Member* - [GitHub](https://github.com/lgruelas)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the GPL 3 License - see the [LICENSE.md](LICENSE.md) file for details

## Project Status

Starting

## Acknowledgments
