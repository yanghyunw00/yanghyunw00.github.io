/**
 * \file Logger.cpp
 * \author Rudy Castan
 * \author Jonathan Holmes
 * \author Hyunwoo Yang
 * \date 2025 Fall
 * \par CS200 Computer Graphics I
 * \copyright DigiPen Institute of Technology
 */

#include "Logger.hpp"
#include <iomanip>
#include <iostream>

#define ERROR   CS230::Logger::Severity::Error
#define EVENT   CS230::Logger::Severity::Event
#define DEBUG   CS230::Logger::Severity::Debug
#define VERBOSE CS230::Logger::Severity::Verbose

namespace CS230
{
    Logger::Logger(Severity severity, bool use_console, std::chrono::system_clock::time_point start) : min_level(severity), start_time(start), file_stream(nullptr), output_stream(nullptr)
    {
        if (use_console)
        {
            output_stream = &std::cout;
        }
        else
        {
            file_stream   = std::make_unique<std::ofstream>("Trace.log");
            output_stream = file_stream.get();
        }
    }

    void Logger::log(Logger::Severity severity, const std::string& message)
    {
        if (severity >= min_level)
        {
            if (output_stream && output_stream->good())
            {
                *output_stream << "[" << std::fixed << std::setprecision(4) << seconds_since_start() << "]\t" << severity_string(severity) << "\t" << message << std::endl;
            }
        }
    }

    const char* Logger::severity_string(Severity severity)
    {
        switch (severity)
        {
            case Severity::Verbose: return "VERBOSE";
            case Severity::Debug: return "DEBUG  ";
            case Severity::Event: return "EVENT  ";
            case Severity::Error: return "ERROR  ";
        }
        return "UNKNOWN";
    }

}
