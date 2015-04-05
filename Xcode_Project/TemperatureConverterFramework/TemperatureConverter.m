//
//  TemperatureConverter.m
//  TemperatureConverterFramework
//
//  Created by Alex on 3/30/15.
//  Copyright (c) 2015 Nuvious. All rights reserved.
//

#import "TemperatureConverter.h"

@implementation TemperatureConverter

- (id)initWithFahrenheit:(NSString *)string {
    self = [super init];
    if (self) {
        _originalValue = string;
        _originalValueIsFahrenheit = TRUE;
    }
    return self;
}


- (id)initWithCelsius:(NSString *)string
{
    self = [super init];
    if (self) {
        _originalValue = string;
        _originalValueIsFahrenheit = FALSE;
    }
    return self;
}


- (NSString *)getFahrenheitValue {
    if (_originalValueIsFahrenheit) {
        return _originalValue;
    }
    else {
        return [TemperatureConverter celsiusToFahrenheit:_originalValue];

    }
}

- (NSString *)getCelsiusValue {
    if (_originalValueIsFahrenheit) {
        return [TemperatureConverter fahrenheitToCelsius:_originalValue];
    }
    else {
        return _originalValue;
        
    }
}


+ (NSString *)celsiusToFahrenheit: (NSString *)celsius {
    float result = ([celsius floatValue] * 9/5) + 32;
    return [self formattedString:result];
}

+ (NSString *)fahrenheitToCelsius: (NSString *)fahrenheit {
    float result = ([fahrenheit floatValue] - 32) * 5/9;
    return [self formattedString:result];
}

+ (NSString *)formattedString: (float)temperature {
    return [NSString stringWithFormat:@"%0.2f", temperature];
}


@end
