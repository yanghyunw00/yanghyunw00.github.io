/**
 * \file Vec2.cpp
 * \author Jonathan Holmes
 * \author Hyunwoo Yang
 * \date 2025 Fall
 * \par CS200 Computer Graphics I
 * \copyright DigiPen Institute of Technology
 */

#include "Vec2.hpp"
#include <cmath>
#include <iostream>
#include <istream>
#include <ostream>

namespace Math
{

    /*--------------------------This is ivec2---------------------------------*/

    // Constructors
    ivec2::ivec2(int x_, int y_) noexcept : x(x_), y(y_)
    {
    }

    ivec2::ivec2(int xy) noexcept : x(xy), y(xy)
    {
    }

    ivec2::ivec2(const vec2& v) noexcept : x(static_cast<int>(v.x)), y(static_cast<int>(v.y))
    {
    }

    // Arithmetic operators
    ivec2& ivec2::operator+=(const ivec2& rhs) noexcept
    {
        x += rhs.x;
        y += rhs.y;
        return *this;
    }

    ivec2& ivec2::operator-=(const ivec2& rhs) noexcept
    {
        x -= rhs.x;
        y -= rhs.y;
        return *this;
    }

    ivec2& ivec2::operator*=(int scalar) noexcept
    {
        x *= scalar;
        y *= scalar;
        return *this;
    }

    ivec2& ivec2::operator/=(int scalar) noexcept
    {
        x /= scalar;
        y /= scalar;
        return *this;
    }

    // Unary operators
    ivec2 ivec2::operator+() const noexcept
    {
        return *this;
    }

    ivec2 ivec2::operator-() const noexcept
    {
        return ivec2{ -x, -y };
    }

    // Non-member arithmetic operators
    ivec2 operator+(const ivec2& lhs, const ivec2& rhs) noexcept
    {
        return ivec2{ lhs.x + rhs.x, lhs.y + rhs.y };
    }

    ivec2 operator-(const ivec2& lhs, const ivec2& rhs) noexcept
    {
        return ivec2{ lhs.x - rhs.x, lhs.y - rhs.y };
    }

    ivec2 operator*(const ivec2& v, int scalar) noexcept
    {
        return ivec2{ v.x * scalar, v.y * scalar };
    }

    ivec2 operator*(int scalar, const ivec2& v) noexcept
    {
        return ivec2{ v.x * scalar, v.y * scalar };
    }

    ivec2 operator/(const ivec2& v, int scalar) noexcept
    {
        return ivec2{ v.x / scalar, v.y / scalar };
    }

    // Comparison operators
    bool operator==(const ivec2& lhs, const ivec2& rhs) noexcept
    {
        return lhs.x == rhs.x && lhs.y == rhs.y;
    }

    bool operator!=(const ivec2& lhs, const ivec2& rhs) noexcept
    {
        return !(lhs == rhs);
    }

    // Stream operators
    std::ostream& operator<<(std::ostream& os, const ivec2& v)
    {
        os << v.x << ", " << v.y;
        return os;
    }

    std::istream& operator>>(std::istream& is, ivec2& v)
    {
        is >> v.x >> v.y;
        return is;
    }

    /*-------------------------------This is vec2---------------------------------------------------*/
    // Constructors
    vec2::vec2(double x_, double y_) noexcept : x(x_), y(y_)
    {
    }

    vec2::vec2(double xy) noexcept : x(xy), y(xy)
    {
    }

    vec2::vec2(const ivec2& v) noexcept : x(v.x), y(v.y)
    {
    }

    // Arithmetic operators
    vec2& vec2::operator+=(const vec2& rhs) noexcept
    {
        x += rhs.x;
        y += rhs.y;
        return *this;
    }

    vec2& vec2::operator-=(const vec2& rhs) noexcept
    {
        x -= rhs.x;
        y -= rhs.y;
        return *this;
    }

    vec2& vec2::operator*=(double scalar) noexcept
    {
        x *= scalar;
        y *= scalar;
        return *this;
    }

    vec2& vec2::operator/=(double scalar) noexcept
    {
        x /= scalar;
        y /= scalar;
        return *this;
    }

    // Unary operators
    vec2 vec2::operator+() const noexcept
    {
        return *this;
    }

    vec2 vec2::operator-() const noexcept
    {
        return vec2{ -x, -y };
    }

    // Non-member arithmetic operators
    vec2 operator+(const vec2& lhs, const vec2& rhs) noexcept
    {
        return vec2{ lhs.x + rhs.x, lhs.y + rhs.y };
    }

    vec2 operator-(const vec2& lhs, const vec2& rhs) noexcept
    {
        return vec2{ lhs.x - rhs.x, lhs.y - rhs.y };
    }

    vec2 operator*(const vec2& v, double scalar) noexcept
    {
        return vec2{ v.x * scalar, v.y * scalar };
    }

    vec2 operator*(double scalar, const vec2& v) noexcept
    {
        return vec2{ v.x * scalar, v.y * scalar };
    }

    vec2 operator/(const vec2& v, double scalar) noexcept
    {
        return vec2{ v.x / scalar, v.y / scalar };
    }

    // Comparison operators
    bool operator==(const vec2& lhs, const vec2& rhs) noexcept
    {
        return lhs.x == rhs.x && lhs.y == rhs.y;
    }

    bool operator!=(const vec2& lhs, const vec2& rhs) noexcept
    {
        return !(lhs == rhs);
    }

    // Stream operators
    std::ostream& operator<<(std::ostream& os, const vec2& v)
    {
        os << v.x << ", " << v.y;
        return os;
    }

    std::istream& operator>>(std::istream& is, vec2& v)
    {
        is >> v.x >> v.y;
        return is;
    }

}
