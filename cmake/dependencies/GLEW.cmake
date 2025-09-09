# author Rudy Castan
# date 2025 Fall
# CS200 Computer Graphics I
# copyright DigiPen Institute of Technology

# We will use GLEW for OpenGL bindings
# Linux platforms have a very easy way to install these depenencies and expose them to compilers so,
#   we will use the builtin find_package
# Emscripten has their own port of GLEW builtin. We don't even need to specify any flags.
#   Windows does not have a simple way to get it, so we download official windows binaries and link against those


add_library(the_glew INTERFACE)

if(NOT WIN32 AND NOT EMSCRIPTEN)
    # on    Mac : brew install glew
    # on Ubuntu : apt install libglew-dev
    set(GLEW_STATIC_LIBS TRUE)
    find_package(GLEW REQUIRED)
    target_link_libraries(the_glew INTERFACE ${GLEW_STATIC_LIBRARIES} $<$<PLATFORM_ID:Linux>:GL>)
    target_include_directories(the_glew SYSTEM INTERFACE ${GLEW_INCLUDE_DIRS})
elseif(WIN32)
    # download binaries for GLEW for windows x64
    FetchContent_Declare(
        glew
        DOWNLOAD_EXTRACT_TIMESTAMP TRUE
        URL "https://github.com/nigels-com/glew/releases/download/glew-2.2.0/glew-2.2.0-win32.zip"
    )
    FetchContent_MakeAvailable(glew)

    target_link_directories(the_glew INTERFACE ${glew_SOURCE_DIR}/lib/Release/x64)
    target_link_libraries(the_glew INTERFACE glew32s) # note that is the name of the glew32s.lib file we need to link in
    target_include_directories(the_glew SYSTEM INTERFACE ${glew_SOURCE_DIR}/include)
    target_compile_definitions(the_glew INTERFACE GLEW_STATIC)
endif()
