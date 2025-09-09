# Distributed under the OSI-approved BSD 3-Clause License.  See accompanying
# file Copyright.txt or https://cmake.org/licensing for details.

cmake_minimum_required(VERSION 3.5)

file(MAKE_DIRECTORY
  "/mnt/c/Users/Owner/Desktop/cs200-hw1/build/web-release/_deps/gsl-src"
  "/mnt/c/Users/Owner/Desktop/cs200-hw1/build/web-release/_deps/gsl-build"
  "/mnt/c/Users/Owner/Desktop/cs200-hw1/build/web-release/_deps/gsl-subbuild/gsl-populate-prefix"
  "/mnt/c/Users/Owner/Desktop/cs200-hw1/build/web-release/_deps/gsl-subbuild/gsl-populate-prefix/tmp"
  "/mnt/c/Users/Owner/Desktop/cs200-hw1/build/web-release/_deps/gsl-subbuild/gsl-populate-prefix/src/gsl-populate-stamp"
  "/mnt/c/Users/Owner/Desktop/cs200-hw1/build/web-release/_deps/gsl-subbuild/gsl-populate-prefix/src"
  "/mnt/c/Users/Owner/Desktop/cs200-hw1/build/web-release/_deps/gsl-subbuild/gsl-populate-prefix/src/gsl-populate-stamp"
)

set(configSubDirs )
foreach(subDir IN LISTS configSubDirs)
    file(MAKE_DIRECTORY "/mnt/c/Users/Owner/Desktop/cs200-hw1/build/web-release/_deps/gsl-subbuild/gsl-populate-prefix/src/gsl-populate-stamp/${subDir}")
endforeach()
if(cfgdir)
  file(MAKE_DIRECTORY "/mnt/c/Users/Owner/Desktop/cs200-hw1/build/web-release/_deps/gsl-subbuild/gsl-populate-prefix/src/gsl-populate-stamp${cfgdir}") # cfgdir has leading slash
endif()
