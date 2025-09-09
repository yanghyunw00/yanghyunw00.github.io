# Distributed under the OSI-approved BSD 3-Clause License.  See accompanying
# file Copyright.txt or https://cmake.org/licensing for details.

cmake_minimum_required(VERSION 3.5)

file(MAKE_DIRECTORY
  "/mnt/c/Users/Owner/Desktop/cs200-hw1/build/web-release/_deps/stb_github-src"
  "/mnt/c/Users/Owner/Desktop/cs200-hw1/build/web-release/_deps/stb_github-build"
  "/mnt/c/Users/Owner/Desktop/cs200-hw1/build/web-release/_deps/stb_github-subbuild/stb_github-populate-prefix"
  "/mnt/c/Users/Owner/Desktop/cs200-hw1/build/web-release/_deps/stb_github-subbuild/stb_github-populate-prefix/tmp"
  "/mnt/c/Users/Owner/Desktop/cs200-hw1/build/web-release/_deps/stb_github-subbuild/stb_github-populate-prefix/src/stb_github-populate-stamp"
  "/mnt/c/Users/Owner/Desktop/cs200-hw1/build/web-release/_deps/stb_github-subbuild/stb_github-populate-prefix/src"
  "/mnt/c/Users/Owner/Desktop/cs200-hw1/build/web-release/_deps/stb_github-subbuild/stb_github-populate-prefix/src/stb_github-populate-stamp"
)

set(configSubDirs )
foreach(subDir IN LISTS configSubDirs)
    file(MAKE_DIRECTORY "/mnt/c/Users/Owner/Desktop/cs200-hw1/build/web-release/_deps/stb_github-subbuild/stb_github-populate-prefix/src/stb_github-populate-stamp/${subDir}")
endforeach()
if(cfgdir)
  file(MAKE_DIRECTORY "/mnt/c/Users/Owner/Desktop/cs200-hw1/build/web-release/_deps/stb_github-subbuild/stb_github-populate-prefix/src/stb_github-populate-stamp${cfgdir}") # cfgdir has leading slash
endif()
